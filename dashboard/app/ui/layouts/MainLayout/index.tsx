'use client';

import { useCallback, useEffect } from 'react';
import {
  Box,
  Flex,
  useDisclosure,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';

// Constants
import { END_POINTS, SHOW_TIME, SIDEBAR } from '@/lib/constants';

// Component
import { Header, SideBar } from '@/ui/layouts';

// Provider
import { CheckPinCodeProvider } from '@/ui/providers';

// Stores
import { TAuthStoreData, authStore } from '@/lib/stores';

// Interfaces
import { TUserDetail } from '@/lib/interfaces';
import { useAuth } from '@/lib/hooks';
import { Indicator } from '@/ui/components';
import { breakpoints } from '@/ui/themes/bases';
import { useQueryClient } from '@tanstack/react-query';
import { isWindowDefined } from '@/lib/utils';
import { getMessaging, onMessage } from 'firebase/messaging';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDesktop] = useMediaQuery(
    `(min-width: ${breakpoints ? breakpoints['4xl'] : ''})`,
  );
  const {
    isOpen: isExpandSidebar,
    onOpen,
    onClose,
  } = useDisclosure({
    defaultIsOpen: false,
  });

  const user = authStore((state): TAuthStoreData['user'] => state.user);
  const { isLogoutHandling, signOut } = useAuth();

  const handleSignOut = useCallback(() => signOut(), [signOut]);

  useEffect(() => {
    if (isDesktop) {
      onOpen();
    }
  }, [isDesktop, onOpen]);

  const toast = useToast();

  const queryClient = useQueryClient();

  const messaging = isWindowDefined() ? getMessaging() : null;

  messaging &&
    onMessage(messaging, async (payload) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: [END_POINTS.MY_WALLET],
        }),
        queryClient.invalidateQueries({
          queryKey: [END_POINTS.TRANSACTIONS],
        }),
        queryClient.invalidateQueries({
          queryKey: [END_POINTS.NOTIFICATION],
        }),
      ]).finally(() => {
        toast({
          title: payload?.notification?.title,
          description: payload?.notification?.body,
          status: 'success',
          duration: SHOW_TIME,
          isClosable: true,
          position: 'top-right',
        });
      });
    });

  return (
    <>
      <Indicator isOpen={isLogoutHandling}>
        <Flex w="full" h="full" bg="background.body.primary">
          <Box
            pl={{
              base: 0,
              md: SIDEBAR.MINI_SIDEBAR_WIDTH,
              lg: SIDEBAR.MINI_SIDEBAR_WIDTH,
              '4xl': isExpandSidebar
                ? SIDEBAR.EXPAND_SIDEBAR_WIDTH
                : SIDEBAR.MINI_SIDEBAR_WIDTH,
            }}
            w="full"
            minH="100vh"
            h="full"
            sx={{
              transition: 'all .25s ease-in-out',
            }}
          >
            <SideBar
              isExpandSidebar={isExpandSidebar}
              user={user as TUserDetail}
              onOpen={onOpen}
              onClose={onClose}
              onSignOut={handleSignOut}
            />
            <Header />
            {children}
          </Box>
        </Flex>
      </Indicator>
      {!user?.pinCode && <CheckPinCodeProvider />}
    </>
  );
};

export default MainLayout;

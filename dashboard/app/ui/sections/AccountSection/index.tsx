'use client';

import { ReactNode, memo, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Box, Flex } from '@chakra-ui/react';

// Components
import { Benefit, Divider, Logo, SwitchTheme } from '@/ui/components';
import Heading from '@/ui/layouts/AuthHeader';

// Layouts
import { AuthFooter } from '@/ui/layouts';

// Constants
import { ROUTES, TITLES } from '@/lib/constants';

type TAccountProps = {
  children?: ReactNode;
};

const AccountSection = ({ children }: TAccountProps): JSX.Element => {
  const pathname = usePathname();

  const pathForgotPassword = pathname === `/${ROUTES.FORGOT_PASSWORD}`;
  const pathLogin = pathname === `/${ROUTES.LOGIN}`;

  const title: string = useMemo(
    (): string =>
      pathForgotPassword
        ? TITLES.FORGOT_PASSWORD
        : pathLogin
          ? TITLES.SIGN_IN
          : TITLES.SIGN_UP,
    [pathForgotPassword, pathLogin],
  );

  return (
    <Flex width="100%" minH="100vh">
      <Box
        as="section"
        p="40px 0 48px"
        flex={1}
        w={{
          base: '100%',
          md: 'unset',
        }}
        bg="background.body.secondary"
      >
        <Flex justifyContent="space-between" px={12}>
          <Logo />
          <SwitchTheme />
        </Flex>
        <Box
          w={{
            base: '100%',
            sm: 425,
            md: 460,
          }}
          margin="auto"
          pt={24}
          pb={16}
          px={5}
          sx={{
            boxSizing: {
              base: 'border-box',
              md: 'unset',
            },
          }}
        >
          <Heading title={title} pathName={pathname} />
          <Divider content={!pathForgotPassword ? TITLES.AUTH_DiVIDER : ''} />
          {children}
          {pathForgotPassword && <AuthFooter />}
        </Box>
      </Box>
      <Benefit pathName={pathname} />
    </Flex>
  );
};

const Accounts = memo(AccountSection);

export default Accounts;

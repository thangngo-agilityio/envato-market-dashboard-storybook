'use client';
// import dynamic from 'next/dynamic';
import { Fragment, memo } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import { Arrow, Avatar, Indicator } from '@/ui/components';

// Constants
import { IMAGES, MENU_LIST, MENU_LIST_ICON } from '@/lib/constants';
// Hooks
import { useAuth } from '@/lib/hooks';

interface DropdownProps {
  src?: string;
  role: string;
  name?: string;
  alt?: string;
  permission?: string;
  offsetX?: number;
  offsetY?: number;
}
const UserDropdownMenu = ({
  src = IMAGES.USER.url,
  name = '',
  role,
  alt = '',
  permission = '',
  offsetX = 0,
  offsetY = 10,
}: DropdownProps) => {
  const { isLogoutHandling, signOut } = useAuth();
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  return (
    <Indicator isOpen={isLogoutHandling}>
      <Menu offset={[offsetX, offsetY]}>
        {({ isOpen }) => (
          <Box>
            <MenuButton
              as={Button}
              p={0}
              bg="none"
              _hover={{
                bg: 'none',
              }}
              _active={{
                bg: 'none',
              }}
              isActive={isOpen}
              title={name}
            >
              <Flex alignItems="center">
                <Avatar src={src} alt={alt} />
                <Box display={{ base: 'none', '3xl': 'inline' }}>
                  <Flex flexDirection="column" alignItems="start" ml={18}>
                    <Flex alignItems="center">
                      <Text
                        mr="15px"
                        w={68}
                        fontWeight="bold"
                        variant="text5Xl"
                        whiteSpace="break-spaces"
                        noOfLines={1}
                      >
                        {name}
                      </Text>
                      <Arrow color={colorFill} />
                    </Flex>
                    <Text
                      fontSize="sm"
                      w={20}
                      color="text.secondary"
                      variant="text5Xl"
                    >
                      {permission}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </MenuButton>
            <MenuList
              data-testid="TestDropdown"
              position="relative"
              zIndex={2}
              px={3}
              py={2}
              mt={{ md: 4 }}
              w={300}
              border="none"
              borderRadius="lg"
              bg="background.component.primary"
            >
              {MENU_LIST_ICON(role).map(({ id, href, icon, value }) => {
                const Icon = icon || Fragment;
                return (
                  <>
                    {!value ? (
                      <></>
                    ) : (
                      <MenuItem
                        key={id}
                        as={Link}
                        href={href}
                        p={3.5}
                        aria-label={`menu-icon-${value}`}
                        borderRadius="lg"
                        bg="transparent"
                        _hover={{
                          bg: 'background.component.tertiary',
                          color: 'text.currencyColor',
                          svg: { stroke: 'text.currencyColor' },
                          path: { stroke: 'text.currencyColor' },
                          ellipse: { stroke: 'text.currencyColor' },
                          circle: { stroke: 'text.currencyColor' },
                          borderColor: 'transparent',
                          textDecoration: 'none',
                        }}
                        _focus={{
                          outline: 'none',
                        }}
                      >
                        <Flex>
                          <Icon color={colorFill} />
                          <Text ml={18} variant="text4Xl">
                            {value}
                          </Text>
                        </Flex>
                      </MenuItem>
                    )}
                  </>
                );
              })}
              <Divider my={3.5} color="gray.300" />
              {MENU_LIST.map(({ id, value, href, icon }) => {
                const Icon = icon || Fragment;
                const handleSignOut = () => signOut();

                const props =
                  id === 1
                    ? {
                        onClick: handleSignOut,
                      }
                    : {
                        as: Link,
                        href: href,
                      };

                return (
                  <MenuItem
                    key={id}
                    p={3.5}
                    borderRadius="lg"
                    bg="transparent"
                    aria-label={`menu-item-${value}`}
                    _hover={{
                      bg: 'background.component.tertiary',
                      color: 'text.currencyColor',
                      svg: { stroke: 'text.currencyColor' },
                      path: { stroke: 'text.currencyColor' },
                      borderColor: 'transparent',
                      textDecoration: 'none',
                    }}
                    _focus={{
                      outline: 'none',
                    }}
                    {...props}
                  >
                    <Flex>
                      <Icon color={colorFill} />
                      <Text ml={18} variant="text4Xl">
                        {value}
                      </Text>
                    </Flex>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Box>
        )}
      </Menu>
    </Indicator>
  );
};
const Dropdown = memo(UserDropdownMenu);
export default Dropdown;

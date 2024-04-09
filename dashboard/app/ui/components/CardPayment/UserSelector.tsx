import {
  Box,
  IconButton,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import {
  FocusEventHandler,
  MouseEvent,
  MouseEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Control, Controller } from 'react-hook-form';

// Icons
import { ChevronIcon } from '@/ui/components/Icons';

// Types
import { TTransfer } from '.';
import { TUserDetail } from '@/lib/interfaces';

// Hooks
import { useDebounce } from '@/lib/hooks';
import { AUTH_SCHEMA, COMMON_MESSAGES } from '@/lib/constants';
import { InputField } from '..';
import isEqual from 'react-fast-compare';

export type TUseSelectorProps = {
  control: Control<TTransfer>;
  listUser?: Array<
    Omit<TUserDetail, 'id'> & {
      _id: string;
    }
  >;
};

type TUserListProps = Required<Omit<TUseSelectorProps, 'control'>> & {
  onSelect: (
    email: string,
    change: (email: string) => void,
  ) => MouseEventHandler<HTMLLIElement>;
  onChange: (email: string) => void;
};

const UserList = ({
  listUser = [],
  onSelect,
  onChange,
}: TUserListProps): JSX.Element => (
  <List
    overflowY="scroll"
    position="absolute"
    zIndex={10}
    top={{
      base: 'unset',
      '2xl': '100%',
    }}
    bottom={{
      base: '100%',
      '2xl': 'unset',
    }}
    w="full"
    maxH={250}
    mt={{
      base: 'unset',
      '2xl': 3,
    }}
    mb={{
      base: 3,
      '2xl': 'unset',
    }}
    bg="background.component.primary"
    boxShadow="lg"
    _dark={{
      shadow: '0 5px 10px 2px gray',
    }}
    rounded="md"
  >
    {listUser.map((user) => (
      <ListItem
        key={user._id}
        value={user._id}
        p={5}
        color="text.primary"
        cursor="pointer"
        _hover={{
          _dark: {
            bg: 'common.white',
            color: 'secondary.400',
          },
          _light: {
            color: 'common.white',
            bg: 'secondary.400',
          },
        }}
        onClick={onSelect(user.email, onChange)}
      >
        {user.email}
      </ListItem>
    ))}
    {!listUser.length && (
      <Text textAlign="center" py={5} fontSize="lg">
        {COMMON_MESSAGES.EMPTY_ARRAY}
      </Text>
    )}
  </List>
);

const UserListMemorized = memo(UserList, isEqual);

const UserSelectorComponent = ({
  control,
  listUser = [],
}: TUseSelectorProps): JSX.Element => {
  const [isOpenOptions, setOpenOptions] = useState<boolean>(false);
  const [options, setOptions] =
    useState<TUseSelectorProps['listUser']>(undefined);
  const filter: TUseSelectorProps['listUser'] = options ?? listUser;

  const handleFilterOptions = useDebounce(
    (searchValue: string) => {
      const filterValue = listUser.filter((user) => {
        const currentEmail: string = user.email.trim().toLowerCase();
        const searchEmail: string = searchValue.trim().toLowerCase();

        return currentEmail.includes(searchEmail);
      });

      setOptions(filterValue);
    },
    [options, listUser],
  );

  const handleChangeSearch = useCallback(
    (searchValue: string, onChange: (val: string) => void) => {
      onChange(searchValue);
      setOpenOptions(true);
      handleFilterOptions(searchValue);
    },
    [handleFilterOptions],
  );

  const handleToggleOpen: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();

      setOpenOptions((prev) => !prev);
    },
    [],
  );

  const handleFocusOrBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.stopPropagation();

      handleFilterOptions(e.target.value);
      setOpenOptions(true);
    },
    [handleFilterOptions],
  );

  const handleSelectEmail = useCallback(
    (email: string, onChange: (val: string) => void) => (e: MouseEvent) => {
      e.stopPropagation();

      onChange(email);
      setOpenOptions(false);
    },
    [],
  );

  useEffect(() => {
    const handleCloseOptions = () => setOpenOptions(false);

    if (isOpenOptions) {
      window.addEventListener('click', handleCloseOptions);
    }

    return () => {
      window.removeEventListener('click', handleCloseOptions);
    };
  }, [isOpenOptions]);

  return (
    <>
      <Text
        fontWeight="bold"
        color="text.primary"
        fontSize="lg"
        mb={3}
        textTransform="capitalize"
      >
        quick transfer
      </Text>

      <Box position="relative">
        <Controller
          control={control}
          name="memberId"
          defaultValue=""
          rules={{
            ...AUTH_SCHEMA.EMAIL,
            validate: () => !!filter.length,
          }}
          render={({ field: { onChange, ...field } }) => {
            const handleChange = (search: string) =>
              handleChangeSearch(search, onChange);

            return (
              <>
                <InputGroup size="md" position="static">
                  <InputField
                    variant="authentication"
                    placeholder="Choose an account to transfer"
                    rightIcon={
                      <IconButton
                        p={1}
                        w="fit-content"
                        h="fit-content"
                        aria-label="Icon dropdown"
                        bg="transparent"
                        _hover={{
                          bg: 'transparent',
                        }}
                      >
                        <ChevronIcon />
                      </IconButton>
                    }
                    {...field}
                    onChange={handleChange}
                    onFocus={handleFocusOrBlur}
                    onBlur={handleFocusOrBlur}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <InputRightElement>
                    <IconButton
                      p={1}
                      w="fit-content"
                      h="fit-content"
                      aria-label="Icon dropdown"
                      bg="transparent"
                      _hover={{
                        bg: 'transparent',
                      }}
                      onClick={handleToggleOpen}
                    >
                      <ChevronIcon />
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
                {isOpenOptions && (
                  <UserListMemorized
                    listUser={filter}
                    onSelect={handleSelectEmail}
                    onChange={onChange}
                  />
                )}
              </>
            );
          }}
        />
      </Box>
    </>
  );
};

const UserSelector = memo(UserSelectorComponent);

export default UserSelector;

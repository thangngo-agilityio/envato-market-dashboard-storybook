import { memo } from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

// Types
import { TTransfer } from '.';

// Utils
import { formatAmountNumber } from '@/lib/utils';
import { AUTH_SCHEMA } from '@/lib/constants';

export type TEnterMoneyProps = {
  control: Control<TTransfer>;
  isDisabled?: boolean;
};

const EnterMoneyComponent = ({
  control,
  isDisabled = false,
}: TEnterMoneyProps): JSX.Element => (
  <>
    <Box
      border="1px solid"
      borderColor="border.secondary"
      p={4}
      mt={5}
      borderRadius="lg"
    >
      <Text color="text.secondary"> Enter amount </Text>
      <Flex direction="row" alignItems="center">
        <Text color="text.primary" fontSize="2xl" fontWeight="bold">
          $
        </Text>
        <Controller
          control={control}
          rules={AUTH_SCHEMA.TRANSFER_AMOUNT}
          name="amount"
          defaultValue=""
          render={({ field: { value, onChange } }) => {
            const handleChange = (
              event: React.ChangeEvent<HTMLInputElement>,
            ) => {
              const value: string = event.target.value;

              if (isNaN(+value.replaceAll(',', ''))) return;

              // Remove non-numeric characters and leading zeros
              const sanitizedValue = formatAmountNumber(value);

              onChange(sanitizedValue);
            };

            return (
              <Input
                variant="authentication"
                type="text"
                _dark={{
                  border: 'none',
                }}
                placeholder="0.00"
                sx={{ border: 'none', padding: 0 }}
                color="text.primary"
                fontWeight="bold"
                fontSize="2xl"
                ml={2}
                value={value}
                name="amount"
                onChange={handleChange}
                autoComplete="off"
                position="static"
              />
            );
          }}
        />
      </Flex>
    </Box>

    <Button
      aria-label="btn-send-money"
      mt={4}
      colorScheme="primary"
      bg="primary.300"
      fontWeight="bold"
      type="submit"
      isDisabled={isDisabled}
    >
      Send Money
    </Button>
  </>
);

const EnterMoney = memo(EnterMoneyComponent);
export default EnterMoney;

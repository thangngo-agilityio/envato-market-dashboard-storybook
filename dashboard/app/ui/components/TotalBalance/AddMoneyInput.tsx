import { memo } from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

// Utils
import { formatAmountNumber } from '@/lib/utils';

// Types
import { TAddMoneyForm } from '.';
import { AUTH_SCHEMA } from '@/lib/constants';

export type TAddMoneyInputFieldProps = {
  control: Control<TAddMoneyForm>;
};

const AddMoneyInputField = ({
  control,
}: TAddMoneyInputFieldProps): JSX.Element => (
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
        name="amount"
        rules={AUTH_SCHEMA.TRANSFER_AMOUNT}
        render={({ field: { value, onChange } }) => {
          const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value: string = event.target.value;

            // Remove non-numeric characters and leading zeros
            const sanitizedValue = formatAmountNumber(value);

            onChange(sanitizedValue);
          };

          return (
            <Input
              variant="authentication"
              type="text"
              autoComplete="off"
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
            />
          );
        }}
      />
    </Flex>
  </Box>
);

export const AddMoneyInput = memo(AddMoneyInputField);

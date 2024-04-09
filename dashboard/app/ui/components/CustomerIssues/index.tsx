'use client';

import { memo } from 'react';
import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react';

// Components
import { CardIssues } from '@/ui/components';

// Interfaces
import { IIssues } from '@/lib/interfaces';

interface CustomerProps {
  isDisabled?: boolean;
  hasNextPage?: boolean;
  dataList?: IIssues[];
  onLoadMore: () => void;
  isFetching?: boolean;
}

const CustomerIssues = ({
  dataList,
  isDisabled = false,
  hasNextPage = true,
  onLoadMore,
  isFetching,
}: CustomerProps) => (
  <Box
    px={8}
    py={6}
    borderWidth="1px"
    rounded={8}
    h="fit-content"
    minW={{ xl: 400, '5xl': 450 }}
    borderColor="border.septenary"
  >
    <Text fontSize="lg" color="text.primary" fontWeight="bold" mb={4}>
      Recent Support
    </Text>

    {dataList && (
      <Box
        maxH={1045}
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: 2,
          },
          '&::-webkit-scrollbar-track': {
            width: 2,
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
            borderRadius: '24px',
          },
        }}
      >
        {dataList?.map((item) => (
          <Flex key={item._id}>
            <CardIssues data={item} />
          </Flex>
        ))}
      </Box>
    )}

    {isFetching && (
      <Flex justifyContent="center">
        <Spinner />
      </Flex>
    )}

    {hasNextPage && (
      <Button
        aria-label="btn load-more"
        bg="text.primary"
        border="1px"
        color="text.textLoadMore"
        mt={4}
        _hover={{
          bg: 'text.textLoadMore',
          border: '1px',
          borderColor: 'border.octonary',
          color: 'text.primary',
        }}
        isDisabled={isDisabled}
        onClick={onLoadMore}
      >
        Load More
      </Button>
    )}
  </Box>
);

const CustomerIssuesMemorize = memo(CustomerIssues);
export default CustomerIssuesMemorize;

import { QueryClient } from '@tanstack/react-query';
import { getStatistical } from '../services';

export const prefetchStatistical = async <T>(
  endPoint: string,
  queryClient: QueryClient,
) => {
  await queryClient.prefetchQuery({
    queryKey: [endPoint],
    queryFn: () => getStatistical<T>(endPoint),
  });
};

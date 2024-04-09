import { IAxiosConfig } from '@/lib/interfaces';
import { MainHttpService } from '.';

export const getStatistical = async <T>(
  endPoint: string,
  config?: IAxiosConfig,
): Promise<T> => {
  const response = await MainHttpService.get<T>(endPoint, config);

  return response.data;
};

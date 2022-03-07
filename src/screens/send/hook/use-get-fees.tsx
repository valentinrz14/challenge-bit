import { getFees } from '@api/apiWrapper';
import { SendFastestFees } from '@api/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

/*
 ** Types
 */
interface UseGetFeesResponse {
  isFetching: boolean;
  fees?: SendFastestFees['fastestFee'];
  error: unknown;
}
/*
 ** Constants
 */
const PULLING_INTERVAL_TIME = 2000;
const DECIMAL_NUMBER_FOR_FEES = 10000000;
/*
 ** Hooks
 */
export const useGetFees = (): UseGetFeesResponse => {
  const { data, isLoading, error } = useQuery<SendFastestFees, AxiosError>(
    'fees',
    getFees,
    { refetchInterval: PULLING_INTERVAL_TIME },
  );

  return {
    fees: (data?.fastestFee || 0) / DECIMAL_NUMBER_FOR_FEES,
    isFetching: isLoading,
    error,
  };
};

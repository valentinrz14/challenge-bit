import { Alert } from 'react-native';
import { getRates } from '@api/apiWrapper';
import { HomeRates, HomeRatesResponse } from '@api/types';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
/*
 ** Types
 */

interface UseGetRatesHomeResponse {
  rates?: HomeRates['rates'];
  isFetching: boolean;
  error: unknown;
}
/*
 ** Constatns
 */
const PULLING_INTERVAL_TIME = 2000;
/*
 ** Hook
 */

export const useGetRatesHome = (): UseGetRatesHomeResponse => {
  const { data, isLoading, error } = useQuery<HomeRatesResponse, AxiosError>(
    'rates',
    getRates,
    {
      refetchInterval: PULLING_INTERVAL_TIME,
      onError: () => {
        Alert.alert('!Ups', ' Hubo un error al obtener los rates');
      },
    },
  );

  return { rates: data?.rates, isFetching: isLoading, error };
};

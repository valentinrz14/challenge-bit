import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getRates } from '@api/apiWrapper';
import { HomeRatesResponse } from '@api/types';
/*
 ** Types
 */

interface UseGetRatesHomeResponse {
  rates?: HomeRatesResponse;
  isFetching: boolean;
}

/*
 ** Hook
 */

export const useGetRatesHome = (): UseGetRatesHomeResponse => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [rates, setRates] = useState<HomeRatesResponse | undefined>();

  const fetchRates = async () => {
    try {
      const data = await getRates();
      setRates(data);
      setIsFetching(false);
    } catch (error: any) {
      Alert.alert('!Ups hubo un error', error);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return { isFetching, rates };
};

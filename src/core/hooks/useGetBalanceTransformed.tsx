import { useGetRatesHome } from '@screens/home/home-list/hooks/use-get-rates-home';
import { ReduxRootState } from '@store/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/*
 ** Types
 */
interface UseGetBalanceTransformedResponse {
  balanceTransform?: number;
  isFetching: boolean;
  balance: number;
  symbol: string;
}
/*
 ** Component
 */
export const useGetBalanceTranformed = (): UseGetBalanceTransformedResponse => {
  const { rates, isFetching } = useGetRatesHome();
  const { balance } = useSelector((state: ReduxRootState) => state.home);

  const [balanceTransform, setBalanceTransform] = useState<number>();

  useEffect(() => {
    if (rates) {
      const balanceFormated = (rates.ARS_SELL * balance) / 1.0;
      setBalanceTransform(Number(balanceFormated?.toFixed(4)));
    }
  }, [balance, rates]);

  return {
    balanceTransform,
    balance,
    isFetching,
    symbol: 'ARS',
  };
};

import { useEffect, useState } from 'react';
import {
  homeAddOperationList,
  homeSetLoading,
} from '@screens/home/home-list/redux/home-reducer-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateRandomId } from '@core/hooks/useCreateRandomId';
import { useGetBalanceTranformed } from '@core/hooks/useGetBalanceTransformed';
import { HomeListData } from '@api/types';
import { ReduxRootState } from '@store/types';
import { FormValues } from '@screens/send/input/types';
/*
 ** Types
 */
interface UseCreateOperationProps extends Omit<FormValues, 'amount'> {
  amount: number;
}
interface UseCreateOperationResponse {
  success: boolean;
}
/*
 ** Hook
 */
export const useCreateOperation = ({
  amount,
  currency,
  email,
}: UseCreateOperationProps): UseCreateOperationResponse => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: ReduxRootState) => state.home);

  const { balanceTransform } = useGetBalanceTranformed();
  const { id } = useCreateRandomId();

  const [success, setsuccess] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && balanceTransform) {
      const createOperation: HomeListData = {
        id,
        title: 'Enviado',
        currencyAmount: amount,
        currencySymbol: currency,
        currencyAmountConverted: balanceTransform,
        currencySymbolConverted: 'ARS',
        state: 'Aceptado',
        destination: email,
        date: '2020-08-20T16:00:00.000Z',
      };

      dispatch(homeSetLoading());
      dispatch(homeAddOperationList(createOperation));
      setsuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balanceTransform, loading]);

  return { success };
};

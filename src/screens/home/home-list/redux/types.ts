import { HomeListData } from '@api/types';
/*
 ** Types
 */

export interface HomeState {
  balance: number;
  loading: boolean;
  shortOperationList: HomeListData[];
  operationList: HomeListData[];
  error: string | null | unknown;
}

export interface HomeActionTypes {
  type: string;
  payload: Omit<HomeState, 'operationList'> & { operationList: HomeListData };
}

import { HomeListData } from '@api/types';

/*
 ** Types
 */
export interface HomeDetailState {
  loading: boolean;
  operationDetail: HomeListData | null;
  error: string | null | unknown;
}

export interface HomeDetailActionTypes {
  type: string;
  payload: HomeDetailState;
}

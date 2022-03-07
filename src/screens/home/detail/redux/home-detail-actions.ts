import { HomeListData } from '@api/types';
import {
  HOME_DETAIL_ADD_OPERATION,
  HOME_DETAIL_SET_LOADING,
  HOME_DETAIL_SET_ERROR,
} from '@screens/home/detail/redux/names';

export const homeDetailSetLoading = () => ({
  type: HOME_DETAIL_SET_LOADING,
  payload: {
    loading: true,
  },
});

export const homeDetailAddOperationDetail = (data: HomeListData) => ({
  type: HOME_DETAIL_ADD_OPERATION,
  payload: {
    loading: false,
    operationDetail: data,
  },
});

export const homeDetailSetError = (error: string) => ({
  type: HOME_DETAIL_SET_ERROR,
  payload: {
    loading: false,
    error,
  },
});

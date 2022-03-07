import { HomeListData } from '@api/types';
import {
  HOME_ADD_OPERATION_LIST,
  HOME_SET_LOADING,
  HOME_SET_ERROR,
} from '@screens/home/home-list/redux/names';

export const homeAddOperationList = (data: HomeListData) => {
  return {
    type: HOME_ADD_OPERATION_LIST,
    payload: {
      operationList: data,
      loading: false,
    },
  };
};

export const homeSetLoading = () => ({
  type: HOME_SET_LOADING,
  payload: {
    loading: true,
  },
});

export const homeSetError = (error: string) => ({
  type: HOME_SET_ERROR,
  payload: { error, loading: false },
});

import {
  HOME_DETAIL_ADD_OPERATION,
  HOME_DETAIL_SET_ERROR,
  HOME_DETAIL_SET_LOADING,
} from '@screens/home/detail/redux/names';
import {
  HomeDetailActionTypes,
  HomeDetailState,
} from '@screens/home/detail/redux/types';

/*
 ** Constants
 */

const initialState: HomeDetailState = {
  loading: false,
  operationDetail: null,
  error: null,
};

export const HomeDetailReducer = (
  state = initialState,
  action: HomeDetailActionTypes,
) => {
  if (action.type === HOME_DETAIL_SET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === HOME_DETAIL_ADD_OPERATION) {
    return {
      ...state,
      operationDetail: action.payload.operationDetail,
      loading: false,
    };
  }

  if (action.type === HOME_DETAIL_SET_ERROR) {
    return {
      ...state,
      error: action.payload.error,
      loading: false,
    };
  }

  return state;
};

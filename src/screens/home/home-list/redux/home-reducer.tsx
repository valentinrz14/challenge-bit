import {
  HOME_ADD_OPERATION_LIST,
  HOME_SET_ERROR,
  HOME_SET_LOADING,
} from '@screens/home/home-list/redux/names';
import {
  HomeActionTypes,
  HomeState,
} from '@screens/home/home-list/redux/types';

/*
 ** Constants
 */
const INITIAL_STATE: HomeState = {
  balance: 0.0000155,
  loading: false,
  shortOperationList: [],
  operationList: [],
  error: null,
};

export const HomeReducer = (state = INITIAL_STATE, action: HomeActionTypes) => {
  if (action.type === HOME_SET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === HOME_ADD_OPERATION_LIST) {
    return {
      ...state,
      balance: action.payload.operationList.currencyAmount,
      operationList: [...state.operationList, action.payload.operationList],
      shortOperationList:
        state.operationList.length === 0
          ? [action.payload.operationList]
          : state.operationList.slice(0, 5),
      loading: false,
    };
  }

  if (action.type === HOME_SET_ERROR) {
    return {
      ...state,
      error: action.payload.error,
      loading: false,
    };
  }

  return state;
};

import { HomeDetailReducer } from '@screens/home/detail/redux/home-detail-reducer';
import { HomeReducer } from '@screens/home/home-list/redux/home-reducer';
import { combineReducers, createStore } from 'redux';

export const createTestStore = () => {
  const store = createStore(
    combineReducers({
      home: HomeReducer,
      homeDetail: HomeDetailReducer,
    }),
  );
  return store;
};

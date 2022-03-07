import { HomeDetailReducer } from '@screens/home/detail/redux/home-detail-reducer';
import { HomeReducer } from '@screens/home/home-list/redux/home-reducer';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
  home: HomeReducer,
  homeDetail: HomeDetailReducer,
  // homeActivity: HomeActivityReducer,
});

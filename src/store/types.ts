import { HomeDetailState } from '@screens/home/detail/redux/types';
import { HomeState } from '@screens/home/home-list/redux/types';

export interface ReduxRootState {
  home: HomeState;
  homeDetail: HomeDetailState;
}

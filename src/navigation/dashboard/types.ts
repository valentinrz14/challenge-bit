import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackParamsList } from './home/types';
import { SendStackParamsList } from './send/types';

export type DashboardStackParamsList = {
  HomeStack: NavigatorScreenParams<HomeStackParamsList>;
  SendStack: NavigatorScreenParams<SendStackParamsList>;
};

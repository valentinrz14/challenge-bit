import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../../dashboard/home';
import { HomeStackParamsList } from './types';
import { ActivityScreen } from '../../../dashboard/home/activity';
import { DetailsScreen } from '../../../dashboard/home/detail';

const Stack = createNativeStackNavigator<HomeStackParamsList>();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Activity" component={ActivityScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './home';
import { DashboardStackParamsList } from './types';
import { SendStack } from './send';

const Tab = createBottomTabNavigator<DashboardStackParamsList>();

export const DashboardStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="SendStack" component={SendStack} />
  </Tab.Navigator>
);

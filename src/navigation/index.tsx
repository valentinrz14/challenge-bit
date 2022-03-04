import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './home';
import { DashboardStackParamsList } from './types';
import { SendStack } from './send';
import { getOptionsBottom } from './utils/get-options-bottom';

const Tab = createBottomTabNavigator<DashboardStackParamsList>();

export const DashboardStack = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={getOptionsBottom({ title: 'Inicio', iconTitle: 'home' })}
    />
    <Tab.Screen
      name="SendStack"
      component={SendStack}
      options={getOptionsBottom({ title: 'Enviar', iconTitle: 'send' })}
    />
  </Tab.Navigator>
);

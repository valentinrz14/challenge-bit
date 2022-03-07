import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SendScreen } from '@screens/send';
import { SendStackParamsList } from './types';
import { LayoutLoadingOperationScreen } from '@screens/send/layout-loading-operation';

const Stack = createNativeStackNavigator<SendStackParamsList>();

export const SendStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Send"
      component={SendScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SendLayoutLoadingOperation"
      component={LayoutLoadingOperationScreen}
      options={{ headerShown: false, gestureEnabled: false }}
    />
  </Stack.Navigator>
);

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SendScreen } from '@screens/send';
import { SendStackParamsList } from './types';

const Stack = createNativeStackNavigator<SendStackParamsList>();

export const SendStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Send"
      component={SendScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

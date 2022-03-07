import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/home';
import { ActivityScreen } from '@screens/home/activity';
import { DetailsScreen } from '@screens/home/detail';
import { HomeStackParamsList } from './types';
import { Colors } from '@core/styles/colors';

const Stack = createNativeStackNavigator<HomeStackParamsList>();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Activity" component={ActivityScreen} />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerTitle: '',
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.white,
        },
      }}
    />
  </Stack.Navigator>
);

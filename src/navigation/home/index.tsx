import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/home';
import { ActivityScreen } from '@screens/home/activity';
import { DetailsScreen } from '@screens/home/detail';
import { HomeStackParamsList } from './types';
import { Colors } from '@core/styles/colors';

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const getOptionsHeader: NativeStackNavigationOptions = {
  headerTitle: '',
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerTransparent: false,
  headerStyle: {
    backgroundColor: Colors.white,
  },
};

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Activity"
      component={ActivityScreen}
      options={getOptionsHeader}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={getOptionsHeader}
    />
  </Stack.Navigator>
);

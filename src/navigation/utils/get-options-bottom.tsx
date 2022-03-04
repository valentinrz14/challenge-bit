import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ChallengeBitIcon } from '../../core/components/icon/';
import { Colors } from '../../core/styles/colors';

interface GetOptionsBottom {
  title: string;
  iconTitle: string;
}
export const getOptionsBottom = ({
  title,
  iconTitle,
}: GetOptionsBottom): BottomTabNavigationOptions => {
  return {
    tabBarLabel: title,
    tabBarIcon: ({ size, focused, color }) => (
      <ChallengeBitIcon
        iconProps={{
          name: iconTitle,
          size,
          color: focused ? color : Colors.grayDark,
        }}
      />
    ),
  };
};

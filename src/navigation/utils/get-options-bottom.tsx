import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ChallengeBitIcon } from '../../core/components/icon/';
import { Colors } from '../../core/styles/colors';
import { Fonts } from '@core/styles/fonts';
/*
 ** Types
 */
interface GetOptionsBottom {
  title: string;
  iconTitle: string;
}
/*
 ** Component
 */
export const getOptionsBottom = ({
  title,
  iconTitle,
}: GetOptionsBottom): BottomTabNavigationOptions => {
  return {
    tabBarLabel: title,
    tabBarLabelStyle: {
      fontFamily: Fonts.MontserratRegular,
      fontSize: 12,
    },
    tabBarIcon: ({ size, focused, color }) => (
      <ChallengeBitIcon
        iconProps={{
          name: iconTitle,
          size,
          color: focused ? color : Colors.greyMedium,
        }}
      />
    ),
  };
};

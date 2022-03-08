import { TypographyProps } from '@core/components/Typography/types';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

/*
 ** Types
 */

interface H7Props extends TypographyProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h7: {
    fontSize: 12,
  },
});

/*
 ** Component
 */
export const H7: FunctionComponent<H7Props> = ({
  children,
  color = 'black',
  fontFamily,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.h7,
        { color: Colors[color], fontFamily: Fonts[fontFamily] },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

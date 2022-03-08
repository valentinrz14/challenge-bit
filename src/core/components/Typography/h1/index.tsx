import { Colors } from '@core/styles/colors';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts } from '@core/styles/fonts';
import { TypographyProps } from '@core/components/Typography/types';

/*
 ** Types
 */

interface H1Props extends TypographyProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h1: {
    fontSize: 35,
  },
});

/*
 ** Component
 */
export const H1: FunctionComponent<H1Props> = ({
  children,
  color = 'black',
  fontFamily,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.h1,
        { color: Colors[color], fontFamily: Fonts[fontFamily] },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

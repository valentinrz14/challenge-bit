import { Colors } from '@core/styles/colors';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts } from '@core/styles/fonts';
import { TypographyProps } from '@core/components/Typography/types';

/*
 ** Types
 */

interface H2Props extends TypographyProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h2: {
    fontSize: 25,
  },
});

/*
 ** Component
 */
export const H2: FunctionComponent<H2Props> = ({
  children,
  color = 'black',
  fontFamily,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.h2,
        { color: Colors[color], fontFamily: Fonts[fontFamily] },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

import { TypographyProps } from '@core/components/Typography/types';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

/*
 ** Types
 */

interface H3Props extends TypographyProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h3: {
    fontSize: 22,
  },
});

/*
 ** Component
 */
export const H3: FunctionComponent<H3Props> = ({
  children,
  color = 'black',
  fontFamily,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.h3,
        { color: Colors[color], fontFamily: Fonts[fontFamily] },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

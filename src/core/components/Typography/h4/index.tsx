import { TypographyProps } from '@core/components/Typography/types';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

/*
 ** Types
 */

interface H4Props extends TypographyProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h4: {
    fontSize: 20,
  },
});

/*
 ** Component
 */
export const H4: FunctionComponent<H4Props> = ({
  children,
  color = 'black',
  fontFamily,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.h4,
        { color: Colors[color], fontFamily: Fonts[fontFamily] },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

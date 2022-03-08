import { TypographyProps } from '@core/components/Typography/types';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

/*
 ** Types
 */

interface H5Props extends TypographyProps {}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h5: {
    fontSize: 18,
  },
});

/*
 ** Component
 */
export const H5: FunctionComponent<H5Props> = ({
  children,
  color = 'black',
  fontFamily,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.h5,
        { color: Colors[color], fontFamily: Fonts[fontFamily] },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

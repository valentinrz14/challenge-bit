import { TypographyProps } from '@core/components/Typography/types';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

/*
 ** Types
 */

interface H6Props extends TypographyProps {}
/*
 ** Styles
 */

const styles = StyleSheet.create({
  h6: {
    fontSize: 15,
  },
});

/*
 ** Component
 */
export const H6: FunctionComponent<H6Props> = ({
  children,
  color = 'black',
  fontFamily,
  textStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.h6,
        { color: Colors[color], fontFamily: Fonts[fontFamily] },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { FontsTypes } from '../../../styles/fonts';

/*
 ** Types
 */

interface H2Props extends TextProps {
  color?: string;
  fontFamily: FontsTypes;
}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h2: {
    fontSize: 35,
    height: 20,
  },
});

/*
 ** Component
 */
export const H2: FunctionComponent<H2Props> = ({ children, ...props }) => {
  return (
    <Text style={styles.h2} {...props}>
      {children}
    </Text>
  );
};

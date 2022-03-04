import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { FontsTypes } from '../../../styles/fonts';

/*
 ** Types
 */

interface H1Props extends TextProps {
  color?: string;
  fontFamily: FontsTypes;
}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  h1: {
    fontSize: 35,
    height: 20,
  },
});

/*
 ** Component
 */
export const H1: FunctionComponent<H1Props> = ({ children, ...props }) => {
  return (
    <Text style={styles.h1} {...props}>
      {children}
    </Text>
  );
};

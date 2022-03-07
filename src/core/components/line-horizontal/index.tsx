import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

/*
 ** Types
 */

interface LineHorizontalProps {
  height: number;
  bgColor: string;
}
/*
 ** Styles
 */
const styles = StyleSheet.create({
  line: {
    width: '100%',
  },
});
/*
 ** Component
 */

export const LineHorizontal: FunctionComponent<LineHorizontalProps> = ({
  bgColor,
  height,
}) => {
  return <View style={[styles.line, { backgroundColor: bgColor, height }]} />;
};

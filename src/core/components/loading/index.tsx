import { Colors } from '@core/styles/colors';
import React, { FunctionComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

/*
 ** Types
 */
interface LoadingProps {
  color?: string;
  size?: 'large' | 'small';
}
/*
 ** Styles
 */

const styles = StyleSheet.create({
  wrapperLayoutLoading: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
 ** Component
 */
export const Loading: FunctionComponent<LoadingProps> = ({
  color = Colors.blue,
  size = 'large',
}) => {
  return (
    <View style={styles.wrapperLayoutLoading}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

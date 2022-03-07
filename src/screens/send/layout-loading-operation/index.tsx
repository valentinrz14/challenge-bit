import React, { FunctionComponent, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SendStackParamsList } from '@navigation/send/types';
import { DashboardStackParamsList } from '@navigation/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCreateOperation } from '@screens/send/layout-loading-operation/hooks/use-create-operation';

/*
 ** Types
 */
type LayoutLoadingOperationScreenNavigation = BottomTabScreenProps<
  DashboardStackParamsList,
  'SendStack'
>['navigation'];

type LayoutLoadingOperationScreenNavigationRoute = NativeStackScreenProps<
  SendStackParamsList,
  'SendLayoutLoadingOperation'
>['route'];

interface LayoutLoadingOperationScreenProps {
  navigation: LayoutLoadingOperationScreenNavigation;
  route: LayoutLoadingOperationScreenNavigationRoute;
}

/*
 ** Styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
/*
 ** Component
 */

export const LayoutLoadingOperationScreen: FunctionComponent<
  LayoutLoadingOperationScreenProps
> = ({ navigation, route: { params } }) => {
  const { success } = useCreateOperation(params);

  useEffect(() => {
    if (success) {
      navigation.reset({
        index: 0,
        routeNames: ['SendStack'],
        routes: [{ name: 'HomeStack' }],
      });
    }
  }, [navigation, success]);

  return (
    <View style={styles.container}>
      <Text>LayoutLoadingOperationScreen</Text>
    </View>
  );
};

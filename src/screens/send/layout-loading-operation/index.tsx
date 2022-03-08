import React, { FunctionComponent, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { SendStackParamsList } from '@navigation/send/types';
import { DashboardStackParamsList } from '@navigation/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCreateOperation } from '@screens/send/layout-loading-operation/hooks/use-create-operation';
import { Loading } from '@core/components/loading';
import { H5 } from '@core/components/Typography';

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
  title: {
    marginTop: 20,
    textAlign: 'center',
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
    const timer = setTimeout(() => {
      if (success) {
        navigation.reset({
          index: 0,
          routeNames: ['SendStack'],
          routes: [{ name: 'HomeStack' }],
        });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, success]);

  return (
    <View style={styles.container}>
      <Loading />
      <H5
        color="black"
        fontFamily="MontserratSemiBold"
        textStyle={styles.title}
      >
        Procesando su operacion, en unos segundos sera redirigo
      </H5>
    </View>
  );
};

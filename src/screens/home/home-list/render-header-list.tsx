import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, ViewProps } from 'react-native';
import { HomeStackParamsList } from '@navigation/home/types';
import { styles } from './render-header-list-styles';
import { LayoutLoading } from '@core/components/layout-loading';
import { useGetBalanceTranformed } from '@core/hooks/useGetBalanceTransformed';

/*
 ** Types
 */

interface RenderHeaderListProps extends Pick<ViewProps, 'testID'> {
  showMoreLastMovements: boolean;
}
/*
 ** Components
 */

export const RenderHeaderList: FunctionComponent<RenderHeaderListProps> = ({
  showMoreLastMovements,
  testID,
}) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();
  const { balanceTransform, isFetching, balance, symbol } =
    useGetBalanceTranformed();

  const handleGoToActivity = () => {
    navigate('Activity');
  };

  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.title}>CHALLENGE BIT</Text>
      {isFetching ? (
        <LayoutLoading />
      ) : (
        <View style={styles.containerBalance}>
          <Text style={styles.titleCurrency}>${balance} BTC</Text>
          <Text style={styles.titleCurrencyTransform}>
            ${balanceTransform} {symbol}
          </Text>
        </View>
      )}
      {showMoreLastMovements && (
        <View style={styles.containerLastMovements}>
          <Text style={styles.titleLastMovements}>Ultimos movimientos</Text>
          <TouchableOpacity onPress={handleGoToActivity}>
            <Text style={styles.titleButtonShowMore}>Ver mas</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

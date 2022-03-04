import { useGetBalance } from '@core/hooks/useGetBalance';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { HomeStackParamsList } from '@navigation/home/types';
import { styles } from './render-header-list-styles';
import { Colors } from '@core/styles/colors';
import { useGetRatesHome } from './hooks/use-get-rates-home';

/*
 ** Components
 */

export const RenderHeaderList: FunctionComponent = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();
  const { balance } = useGetBalance();
  const { rates, isFetching } = useGetRatesHome();

  const handleGoToActivity = () => {
    navigate('Activity');
  };

  if (isFetching) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHALLENGE BIT</Text>
      <View style={styles.containerBalance}>
        <Text style={styles.titleCurrency}>{balance}</Text>
        <Text style={styles.titleCurrencyTransform}>
          {rates?.names.ARS.symbol}
          {rates?.variation.ARS} {rates?.names.ARS.name}
        </Text>
      </View>
      <View style={styles.containerLastMovements}>
        <Text style={styles.titleLastMovements}>Ultimos movimientos</Text>
        <TouchableOpacity onPress={handleGoToActivity}>
          <Text style={styles.titleButtonShowMore}>Ver mas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './render-header-list-styles';

export const RenderHeaderList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHALLENGE BIT</Text>
      <View style={styles.containerBalance}>
        <Text style={styles.titleCurrency}>00.50 BTC</Text>
        <Text style={styles.titleCurrencyTransform}>2375232,81 ARS</Text>
      </View>
    </View>
  );
};

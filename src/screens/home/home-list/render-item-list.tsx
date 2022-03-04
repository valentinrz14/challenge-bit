import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Spacer } from '@core/components/spacer/spacer';
import { HomeStackParamsList } from '@navigation/home/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '@screens/home/home-list/render-item-list-styles';
import { HomeListData, HomeListStateEnum } from '@api/types';
import { useFormatDate } from '@core-hooks/useFormatDate';
import { Colors } from '@core/styles/colors';

/*
 ** Types
 */

interface RenderItemListProps {
  item: HomeListData;
}

/*
 ** Component
 */

export const RenderItemList: FunctionComponent<RenderItemListProps> = ({
  item: {
    date,
    title,
    currencyAmount,
    currencySymbol,
    currencyAmountConverted,
    currencySymbolConverted,
    state,
  },
}) => {
  const { newDate } = useFormatDate({ date: date });

  const { navigate } =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();

  const handleGoToActivity = () => {
    navigate('Details');
  };
  const colorState = {
    [HomeListStateEnum.Aceptado]: Colors.green,
    [HomeListStateEnum.Rechazado]: Colors.red,
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoToActivity}>
      <View>
        <Text style={[styles.titleTransfer, { color: colorState[state] }]}>
          {title} {currencySymbol}
        </Text>
        <Spacer height={5} />
        <Text style={styles.titleDate}>{newDate}</Text>
        <Spacer height={5} />
      </View>
      <View>
        <Text style={[styles.titleValue, { color: colorState[state] }]}>
          {currencyAmount} {currencySymbol}
        </Text>
        <Spacer height={5} />
        <Text style={styles.titleValueTransform}>
          {currencyAmountConverted} {currencySymbolConverted}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

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
import { homeDetailAddOperationDetail } from '@screens/home/detail/redux/home-detail-actions';
import { useDispatch } from 'react-redux';

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
  item,
}) => {
  const dispatch = useDispatch();

  const { newDate } = useFormatDate({ date: date });
  const { navigate } =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();

  const colorState = {
    [HomeListStateEnum.Aceptado]: Colors.green,
    [HomeListStateEnum.Rechazado]: Colors.red,
  };

  const handleGoToActivity = () => {
    navigate('Details');
    dispatch(homeDetailAddOperationDetail(item));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoToActivity}>
      <View>
        <Text style={[styles.title, { color: colorState[state] }]}>
          {title} {currencySymbol}
        </Text>
        <Spacer height={5} />
        <Text style={styles.subtitle}>{newDate}</Text>
        <Spacer height={5} />
      </View>
      <View>
        <Text style={[styles.title, { color: colorState[state] }]}>
          {currencyAmount} {currencySymbol}
        </Text>
        <Spacer height={5} />
        <Text style={styles.subtitle}>
          {currencyAmountConverted} {currencySymbolConverted}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

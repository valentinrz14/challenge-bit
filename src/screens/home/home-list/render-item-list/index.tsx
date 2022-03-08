import React, { FunctionComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Spacer } from '@core/components/spacer/spacer';
import { HomeStackParamsList } from '@navigation/home/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '@screens/home/home-list/render-item-list/render-item-list-styles';
import { HomeListData, HomeListStateEnum } from '@api/types';
import { useFormatDate } from '@core-hooks/useFormatDate';
import { homeDetailAddOperationDetail } from '@screens/home/detail/redux/home-detail-actions';
import { useDispatch } from 'react-redux';
import { H6, H7 } from '@core/components/Typography';
import { ColorsEnum } from '@core/styles/colors';

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

  const colorState: Record<HomeListStateEnum, ColorsEnum> = {
    [HomeListStateEnum.Aceptado]: 'green',
    [HomeListStateEnum.Rechazado]: 'red',
  };

  const handleGoToActivity = () => {
    navigate('Details');
    dispatch(homeDetailAddOperationDetail(item));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoToActivity}>
      <View>
        <H6 color={colorState[state]} fontFamily="MontserratRegular">
          {title} {currencySymbol}
        </H6>
        <Spacer height={5} />
        <H7 color="black" fontFamily="MontserratLight">
          {newDate}
        </H7>
        <Spacer height={5} />
      </View>
      <View>
        <H6 color={colorState[state]} fontFamily="MontserratRegular">
          {currencyAmount} {currencySymbol}
        </H6>
        <Spacer height={5} />
        <H7 color="black" fontFamily="MontserratLight">
          ${currencyAmountConverted} {currencySymbolConverted}
        </H7>
      </View>
    </TouchableOpacity>
  );
};

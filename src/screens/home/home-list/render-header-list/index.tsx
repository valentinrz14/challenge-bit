import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, ViewProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '@navigation/home/types';
import { styles } from './render-header-list-styles';
import { Loading } from '@core/components/loading';
import { useGetBalanceTranformed } from '@core/hooks/useGetBalanceTransformed';
import { H1, H3, H5, H6 } from '@core/components/Typography';

/*
 ** Types
 */

interface RenderHeaderListProps extends Pick<ViewProps, 'testID'> {
  showMoreLastMovements: boolean;
}
/*
 ** Components
 */

const LastMovementsTitle: FunctionComponent = ({ children }) => (
  <View style={styles.containerLastMovements}>
    <H5 color="black" fontFamily="MontserratSemiBold">
      Ultimos movimientos
    </H5>
    {children}
  </View>
);

export const RenderHeaderList: FunctionComponent<RenderHeaderListProps> = ({
  showMoreLastMovements,
  testID,
}) => {
  const { balanceTransform, isFetching, balance, symbol } =
    useGetBalanceTranformed();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();

  const handleGoToActivity = () => {
    navigate('Activity');
  };

  return (
    <View style={styles.container} testID={testID}>
      <H1 textStyle={styles.title} color="black" fontFamily="HubballiRegular">
        CHALLENGE BIT
      </H1>
      {isFetching ? (
        <Loading />
      ) : (
        <View style={styles.containerBalance}>
          <H3 fontFamily="MontserratRegular" color="black">
            ${balance} BTC
          </H3>
          <H6
            color="black"
            fontFamily="MontserratLight"
            textStyle={styles.titleCurrencyTransform}
          >
            ${balanceTransform} {symbol}
          </H6>
        </View>
      )}
      {showMoreLastMovements ? (
        <LastMovementsTitle>
          <TouchableOpacity onPress={handleGoToActivity}>
            <H6 color="blue" fontFamily="MontserratMedium">
              Ver mas
            </H6>
          </TouchableOpacity>
        </LastMovementsTitle>
      ) : (
        <LastMovementsTitle />
      )}
    </View>
  );
};

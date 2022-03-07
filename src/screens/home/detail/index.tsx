import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '@core/styles/colors';
import { RenderContentDetail } from '@screens/home/detail/render-content-detail';
import { RenderHeaderDetail } from '@screens/home/detail/render-header-detail';
import { LineHorizontal } from '@core/components/line-horizontal';
import { HomeStackParamsList } from '@navigation/home/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '@screens/home/detail/detail-styles';
import { useSelector } from 'react-redux';
import { ReduxRootState } from '@store/types';
import { LayoutLoading } from '@core/components/layout-loading';

/*
 ** Types
 */
type DetailsScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamsList,
  'Details'
>;

interface DetailsScreenProps extends DetailsScreenNavigationProp {}

/*
 ** Component
 */
export const DetailsScreen: FunctionComponent<DetailsScreenProps> = () => {
  const { operationDetail, loading } = useSelector(
    (state: ReduxRootState) => state.homeDetail,
  );

  if (loading) {
    return <LayoutLoading size="large" />;
  }

  const backgroundColor =
    operationDetail?.state === 'Rechazado' ? Colors.red : Colors.green;

  return (
    <>
      <LineHorizontal height={1} bgColor={backgroundColor} />
      <View style={styles.mainContainer}>
        <RenderHeaderDetail state={operationDetail?.state} />
        <View style={styles.container}>
          <Text>Detalle de operacion</Text>
          <View style={styles.content}>
            <RenderContentDetail
              title="Operacion"
              subtitle={operationDetail?.title}
            />
            <RenderContentDetail title="ID" subtitle={operationDetail?.id} />
            <RenderContentDetail
              title="Fecha"
              subtitle={operationDetail?.date}
            />
            <RenderContentDetail
              title="Importe"
              subtitle={`$${operationDetail?.currencyAmount} ${operationDetail?.currencySymbol}`}
            />
            <RenderContentDetail
              title="Destino"
              subtitle={operationDetail?.destination}
            />
          </View>
        </View>
      </View>
    </>
  );
};

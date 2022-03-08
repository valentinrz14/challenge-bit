import React, { FunctionComponent } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParamsList } from '@navigation/home/types';
import { DashboardStackParamsList } from '@navigation/types';
import { styles } from '@screens/home/home-styles';
import { ReduxRootState } from '@store/types';
import { HomeListData } from '@api/types';
import { RenderHeaderList } from './home-list/render-header-list';
import { RenderItemList } from './home-list/render-item-list';
import { H5 } from '@core/components/Typography/h5';
/*
 ** Types
 */
type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<DashboardStackParamsList, 'HomeStack'>,
  NativeStackScreenProps<HomeStackParamsList>
>;

interface HomeScreenProps extends HomeScreenNavigationProp {}

/*
 ** Component
 */
const keyExtractor = ({ id }: HomeListData) => id;

const ListEmptyComponent = () => (
  <View style={styles.containerListEmpty}>
    <H5 color="black" fontFamily="MontserratRegular">
      No hay movimientos
    </H5>
  </View>
);

const renderItem = ({ item }: { item: HomeListData }) => {
  return <RenderItemList item={item} />;
};

const itemSeparatorComponent = () => <View style={styles.itemSeparator} />;

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const { shortOperationList, loading, operationList } = useSelector(
    (state: ReduxRootState) => state.home,
  );

  return (
    <SafeAreaView style={styles.mainContainer} testID="home-screen-wrapper">
      <RenderHeaderList
        testID="home-screen-header"
        showMoreLastMovements={operationList.length > 5}
      />
      <FlatList
        bounces={false}
        testID="home-screen-list"
        style={styles.container}
        data={shortOperationList}
        ListEmptyComponent={ListEmptyComponent}
        refreshing={loading}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentList}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </SafeAreaView>
  );
};

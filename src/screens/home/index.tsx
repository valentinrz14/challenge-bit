import { HomeStackParamsList } from '@navigation/home/types';
import { DashboardStackParamsList } from '@navigation/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '@screens/home/home-styles';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ReduxRootState } from '@store/types';
import { HomeListData } from '../../api/types';
import { RenderHeaderList } from './home-list/render-header-list';
import { RenderItemList } from './home-list/render-item-list';
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
const keyExtractor = (item: HomeListData) => item.id;

const ListEmptyComponent = () => (
  <View style={styles.containerListEmpty}>
    <Text style={styles.titleListEmpty}>No hay movimientos</Text>
  </View>
);

const renderItem = ({ item }: { item: HomeListData }) => {
  return <RenderItemList item={item} />;
};

const itemSeparatorComponent = () => <View style={styles.itemSeparator} />;

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const { shortOperationList, loading } = useSelector(
    (state: ReduxRootState) => state.home,
  );

  return (
    <SafeAreaView style={styles.mainContainer} testID="home-screen">
      <RenderHeaderList
        testID="home-screen-header"
        showMoreLastMovements={shortOperationList.length >= 5}
      />
      <FlatList
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

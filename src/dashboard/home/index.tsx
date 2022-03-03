import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { HomeListData } from '../../api/types';
import { Colors } from '../../core/styles/colors';
import { RenderHeaderList } from './home-list/render-header-list';
import { RenderItemList } from './home-list/render-item-list';
/*
 ** Types
 */

interface HomeScreenProps {}

/*
 ** Styles
 */
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {},
});
/*
 ** Constants
 */
const DATA: HomeListData[] = [
  {
    id: '1',
    title: 'Transferencia',
    currencyAmount: '0.25000',
    currencySymbol: 'BTC',
    state: 'Aceptado',
    date: '2020-08-20T16:00:00.000Z',
  },
];
/*
 ** Component
 */
const keyExtractor = (item: HomeListData) => item.id;
const renderItem = ({ item }: { item: HomeListData }) => (
  <RenderItemList item={item} />
);
export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <RenderHeaderList />
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

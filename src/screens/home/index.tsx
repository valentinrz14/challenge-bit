import React, { FunctionComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Platform,
} from 'react-native';
import { HomeListData } from '../../api/types';
import { Colors } from '../../core/styles/colors';
import { RenderHeaderList } from './home-list/render-header-list';
import { RenderItemList } from './home-list/render-item-list';
/*
 ** Types
 */

interface HomeScreenProps {}

/*
 ** Constants
 */
const PADDING_MAIN_CONTAINER = 20;

/*
 ** Styles
 */
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: PADDING_MAIN_CONTAINER,
    paddingVertical: PADDING_MAIN_CONTAINER,
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
  },
  contentList: {
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: Colors.gray,
  },
  itemSeparator: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.grayDark,
    height: 1,
    marginVertical: 15,
  },
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
    currencyAmountConverted: '1.12',
    currencySymbolConverted: 'ARS',
    state: 'Aceptado',
    date: '2020-08-20T16:00:00.000Z',
  },
  {
    id: '2',
    title: 'Transferencia',
    currencyAmount: '0.25000',
    currencySymbol: 'BTC',
    currencyAmountConverted: '1.12',
    currencySymbolConverted: 'ARS',
    state: 'Rechazado',
    date: '2020-08-20T16:00:00.000Z',
  },
  {
    id: '3',
    title: 'Transferencia',
    currencyAmount: '0.25000',
    currencySymbol: 'BTC',
    currencyAmountConverted: '1.12',
    currencySymbolConverted: 'ARS',
    state: 'Aceptado',
    date: '2020-08-20T16:00:00.000Z',
  },
  {
    id: '4',
    title: 'Transferencia',
    currencyAmount: '0.25000',
    currencySymbol: 'BTC',
    currencyAmountConverted: '1.12',
    currencySymbolConverted: 'ARS',
    state: 'Rechazado',
    date: '2020-08-20T16:00:00.000Z',
  },
  {
    id: '5',
    title: 'Transferencia',
    currencyAmount: '0.25000',
    currencySymbol: 'BTC',
    currencyAmountConverted: '1.12',
    currencySymbolConverted: 'ARS',
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

const itemSeparatorComponent = () => <View style={styles.itemSeparator} />;

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <RenderHeaderList />
      <FlatList
        style={styles.container}
        data={DATA}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentList}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </SafeAreaView>
  );
};

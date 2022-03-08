import { HomeListData } from '@api/types';
import { LineHorizontal } from '@core/components/line-horizontal';
import { H4 } from '@core/components/Typography';
import { Colors } from '@core/styles/colors';
import { RenderItemList } from '@screens/home/home-list/render-item-list';
import { ReduxRootState } from '@store/types';
import React, { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './activity-styles';

/*
 ** Types
 */

interface ActivityScreenProps {}

/*
 ** Component
 */

export const ActivityScreen: FunctionComponent<ActivityScreenProps> = () => {
  const { operationList, loading } = useSelector(
    (state: ReduxRootState) => state.home,
  );

  const renderItem = ({ item }: { item: HomeListData }) => {
    return <RenderItemList item={item} />;
  };

  const itemSeparatorComponent = () => <View style={styles.itemSeparator} />;

  const keyExtractor = (item: HomeListData) => item.id;

  return (
    <View style={styles.mainContainer}>
      <LineHorizontal height={1} bgColor={Colors.blue} />
      <H4 color="black" fontFamily="MontserratMedium" textStyle={styles.title}>
        Todos los Movimientos
      </H4>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentList}
        data={operationList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
        refreshing={loading}
      />
    </View>
  );
};

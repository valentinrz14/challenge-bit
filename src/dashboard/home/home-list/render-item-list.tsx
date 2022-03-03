import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { HomeListData } from '../../../api/types';

interface RenderItemListProps {
  item: HomeListData;
}
export const RenderItemList: FunctionComponent<RenderItemListProps> = ({
  item,
}) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

/*
 ** Types
 */

interface SpacerProps {
  height: number;
}

/*
 ** Components
 */

export const Spacer: FunctionComponent<SpacerProps> = ({ height }) => {
  return <View style={{ height }} />;
};

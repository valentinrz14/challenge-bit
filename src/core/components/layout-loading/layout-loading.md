```TSX
import React, { FunctionComponent } from 'react';
import { LayoutLoading } from './index';
import { Colors } from '@core/styles/colors';

export const App: FunctionComponent = () => {
  return <LayoutLoading />
};

export const App: FunctionComponent = () => {
  return <LayoutLoading size="large" color={Colors.black} />
};
```

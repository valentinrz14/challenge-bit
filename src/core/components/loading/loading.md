```TSX
import React, { FunctionComponent } from 'react';
import { Loading } from './index';
import { Colors } from '@core/styles/colors';

export const App: FunctionComponent = () => {
  return <Loading />
};

export const App: FunctionComponent = () => {
  return <Loading size="large" color={Colors.black} />
};
```

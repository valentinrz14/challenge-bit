```TSX
import React, { FunctionComponent } from 'react';
import { ChallengeBitIcon } from './index.tsx';
import { Colors } from '@core/styles/colors';

export const App: FunctionComponent = () => ( 
    <ChallengeBitIcon
        iconProps={{ name: 'home', size: 20, color: Colors.black }}
      />
)
```

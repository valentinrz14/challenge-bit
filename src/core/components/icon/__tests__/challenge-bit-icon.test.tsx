import React from 'react';
import { ChallengeBitIcon } from '@core/components/icon';
import { render } from '@testing-library/react-native';

describe('ChallengeBitIcon', () => {
  it('should render correctly', () => {
    const { toJSON } = render(
      <ChallengeBitIcon
        iconProps={{ name: 'account', size: 20, color: '#000' }}
      />,
    );
    expect(toJSON).toMatchSnapshot();
  });
});

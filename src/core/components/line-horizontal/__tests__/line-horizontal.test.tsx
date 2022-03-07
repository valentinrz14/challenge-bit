import { LineHorizontal } from '@core/components/line-horizontal';
import { Colors } from '@core/styles/colors';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('LineHorizontal', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <LineHorizontal height={1} bgColor={Colors.black} />,
    );
    expect(toJSON).toMatchSnapshot();
  });
});

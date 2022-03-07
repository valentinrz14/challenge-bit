import { LayoutLoading } from '@core/components/layout-loading';
import { Colors } from '@core/styles/colors';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Layout loading', () => {
  it('should render Layout loading with size "large" and color "blue"', () => {
    const { toJSON } = render(<LayoutLoading />);
    expect(toJSON).toMatchSnapshot();
  });

  it('should render Layout loading with size "small" and color "black"', () => {
    const { toJSON } = render(
      <LayoutLoading size="small" color={Colors.black} />,
    );
    expect(toJSON).toMatchSnapshot();
  });
});

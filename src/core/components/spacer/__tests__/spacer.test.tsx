import React from 'react';
import { render } from '@testing-library/react-native';
import { Spacer } from '../spacer';

describe('Spacer', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<Spacer height={10} />);
    expect(toJSON).toMatchSnapshot();
  });
});

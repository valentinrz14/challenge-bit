import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from '@screens/home';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';
import { createTestStore } from '../../../../__tests__/utils/create-test-store';

jest.useFakeTimers();

jest.mock('react-query', () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: {} }),
}));

let store: Store<any, AnyAction>;
const routeMock: any = { params: undefined, screen: 'Home' };
const navigationMock: any = {
  navigate: () => {},
};

beforeEach(() => {
  store = createTestStore();
});

describe('Home Screen', () => {
  it('should render screen with one operation', () => {
    const { getByTestId, toJSON } = render(
      <Provider store={store}>
        <HomeScreen route={routeMock} navigation={navigationMock} />
      </Provider>,
    );

    expect(getByTestId('home-screen')).toBeTruthy();
    expect(getByTestId('home-screen-header')).toBeTruthy();
    expect(getByTestId('home-screen-list')).toBeTruthy();

    expect(toJSON).toMatchSnapshot();
  });
});

import React from 'react';
import { HomeScreen } from '@screens/home';
import { HomeState } from '@screens/home/home-list/redux/types';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';

jest.useFakeTimers();
jest.mock('react-query', () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: {} }),
}));

const routeMock: any = { params: undefined, screen: 'Home' };
const navigationMock: any = {
  navigate: () => {},
};
const INITIAL_STATE: HomeState = {
  balance: 0,
  operationList: [],
  shortOperationList: [
    {
      id: '1',
      title: 'Operacion 1',
      date: '2020-01-01',
      currencyAmount: 0,
      currencySymbol: 'USD',
      currencyAmountConverted: 0,
      currencySymbolConverted: 'ARS',
      destination: '',
      state: 'Aceptado',
    },
  ],
  loading: false,
  error: null,
};

describe('Home Screen', () => {
  it('should render screen with one operation', () => {
    const mockStore = configureStore([]);
    const store = mockStore({ home: INITIAL_STATE });
    const component = (
      <Provider store={store}>
        <HomeScreen route={routeMock} navigation={navigationMock} />
      </Provider>
    );
    const { getByTestId, toJSON } = render(component);

    expect(getByTestId('home-screen-wrapper')).toBeTruthy();
    expect(getByTestId('home-screen-header')).toBeTruthy();
    expect(getByTestId('home-screen-list')).toBeTruthy();

    expect(toJSON).toMatchSnapshot();
  });
});

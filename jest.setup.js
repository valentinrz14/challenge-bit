import { jest } from '@jest/globals';

const mockedNavigate = jest.fn();

module.exports = {
  mockedUseNavigation: jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: mockedNavigate,
      }),
    };
  }),
  mockedReactNativeVectorIcons: jest.mock(
    'react-native-vector-icons/MaterialCommunityIcons',
    () => 'MockedMaterialCommunityIcons',
  ),
};

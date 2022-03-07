import { ChallengeBitIcon } from '@core/components/icon';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { getOptionsBottom } from '@navigation/utils/get-options-bottom';

/*
 ** Tests
 */
describe('getOptionsBottom', () => {
  it('should return a BottomTabNavigationOptions for HomeStack', () => {
    const GET_OPTIONS_BOTTOM_PROPS = {
      title: 'Inicio',
      iconTitle: 'home',
    };
    const mockedGetOptionsBottomResponse = {
      tabBarLabel: GET_OPTIONS_BOTTOM_PROPS.title,
      tabBarLabelStyle: {
        fontFamily: Fonts.MontserratRegular,
        fontSize: 12,
      },
      tabBarIcon: () => (
        <ChallengeBitIcon
          iconProps={{
            name: GET_OPTIONS_BOTTOM_PROPS.iconTitle,
            size: 24,
            color: Colors.greyMedium,
          }}
        />
      ),
    };

    const options = getOptionsBottom({ ...GET_OPTIONS_BOTTOM_PROPS });

    expect(JSON.stringify(options)).toEqual(
      JSON.stringify(mockedGetOptionsBottomResponse),
    );
  });
  it('should return a BottomTabNavigationOptions for SendStack', () => {
    const GET_OPTIONS_BOTTOM_PROPS = {
      title: 'Enviar',
      iconTitle: 'send',
    };

    const mockedGetOptionsBottomResponse = {
      tabBarLabel: GET_OPTIONS_BOTTOM_PROPS.title,
      tabBarLabelStyle: {
        fontFamily: Fonts.MontserratRegular,
        fontSize: 12,
      },
      tabBarIcon: () => (
        <ChallengeBitIcon
          iconProps={{
            name: GET_OPTIONS_BOTTOM_PROPS.iconTitle,
            size: 24,
            color: Colors.greyMedium,
          }}
        />
      ),
    };
    const options = getOptionsBottom({ ...GET_OPTIONS_BOTTOM_PROPS });

    expect(JSON.stringify(options)).toEqual(
      JSON.stringify(mockedGetOptionsBottomResponse),
    );
  });
});

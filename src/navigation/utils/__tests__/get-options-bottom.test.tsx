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
            name: 'Home',
            size: 24,
            color: Colors.greyMedium,
          }}
        />
      ),
    };

    const options = getOptionsBottom({
      iconTitle: 'Home',
      title: GET_OPTIONS_BOTTOM_PROPS.title,
    });

    expect(JSON.stringify(options)).toEqual(
      JSON.stringify(mockedGetOptionsBottomResponse),
    );
  });
  it('should return a BottomTabNavigationOptions for SendStack', () => {
    const GET_OPTIONS_BOTTOM_PROPS = {
      title: 'Enviar',
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
            name: 'Send',
            size: 24,
            color: Colors.greyMedium,
          }}
        />
      ),
    };
    const options = getOptionsBottom({
      iconTitle: 'Send',
      title: GET_OPTIONS_BOTTOM_PROPS.title,
    });

    expect(JSON.stringify(options)).toEqual(
      JSON.stringify(mockedGetOptionsBottomResponse),
    );
  });
});

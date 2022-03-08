import { Platform, StyleSheet } from 'react-native';
import { Colors } from '@core-styles/colors';
import { getShadowStyle } from '@core/utils/get-shadow-style/get-shadow-style';
import { MarginsHorizontal, PaddingsVertical } from '@core/styles/spaces';
/*
 ** Constatns
 */
const TITLE_MAX_HEIGHT = 40;
const CONTAINER_BALANCE_MAX_HEIGHT = 100;

const getContainerPaddingHorizontal = (): number =>
  Platform.OS === 'ios' ? 20 : 0;
/*
 ** Styles
 */
export const styles = StyleSheet.create({
  container: {
    paddingVertical: PaddingsVertical.medium,
    width: '100%',
    paddingHorizontal: getContainerPaddingHorizontal(),
    backgroundColor: Colors.white,
  },
  title: {
    maxHeight: TITLE_MAX_HEIGHT,
    textAlign: 'center',
    letterSpacing: 3,
  },
  containerBalance: {
    maxHeight: CONTAINER_BALANCE_MAX_HEIGHT,
    paddingVertical: PaddingsVertical.medium,
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: MarginsHorizontal.extraLarge,
    borderRadius: 8,
    backgroundColor: Colors.greyLight,
    alignItems: 'center',
    ...getShadowStyle({
      shadowOpacity: 0.3,
      elevation: 5,
    }),
  },
  titleCurrencyTransform: {
    marginTop: 5,
  },
  containerLastMovements: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
});

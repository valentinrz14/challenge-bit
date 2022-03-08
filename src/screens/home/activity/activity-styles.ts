import { Colors } from '@core/styles/colors';
import {
  MarginsVertical,
  PaddingsHorizontal,
  PaddingsVertical,
} from '@core/styles/spaces';
import { getShadowStyle } from '@core/utils/get-shadow-style/get-shadow-style';
import { Platform, StyleSheet } from 'react-native';

/*
 ** Constants
 */
const getPaddingHorizontal = (): number =>
  Platform.OS === 'ios'
    ? PaddingsHorizontal.extraLarge
    : PaddingsHorizontal.medium;
/*
 ** Styles
 */
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    textAlign: 'center',
    marginVertical: MarginsVertical.large,
  },
  container: {
    flex: 1,
    paddingHorizontal: getPaddingHorizontal(),
    backgroundColor: Colors.white,
  },
  contentList: {
    ...getShadowStyle({
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    }),
    borderRadius: 8,
    paddingHorizontal: PaddingsHorizontal.medium,
    paddingVertical: PaddingsVertical.medium,
    backgroundColor: Colors.greyLight,
  },
  itemSeparator: {
    width: '100%',
    backgroundColor: Colors.greyMedium,
    height: 1,
    marginVertical: MarginsVertical.medium,
  },
});

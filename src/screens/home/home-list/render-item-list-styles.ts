import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleTransfer: {
    fontFamily: Fonts.MontserratRegular,
    fontSize: 15,
    color: Colors.black,
  },
  titleDate: {
    fontFamily: Fonts.MontserratLight,
    fontSize: 12,
    color: Colors.black,
  },
  titleValue: {
    fontFamily: Fonts.MontserratRegular,
    fontSize: 15,
    color: Colors.black,
  },
  titleValueTransform: {
    fontFamily: Fonts.MontserratLight,
    fontSize: 12,
    color: Colors.black,
  },
});

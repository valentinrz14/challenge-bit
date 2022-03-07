import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Fonts.MontserratRegular,
    fontSize: 15,
    color: Colors.black,
  },
  subtitle: {
    fontFamily: Fonts.MontserratLight,
    fontSize: 12,
    color: Colors.black,
  },
});

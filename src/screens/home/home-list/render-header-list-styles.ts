import { Platform, StyleSheet } from 'react-native';
import { Colors } from '@core-styles/colors';
import { Fonts } from '@core-styles/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '100%',
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: Colors.white,
  },
  title: {
    maxHeight: 40,
    textAlign: 'center',
    color: Colors.black,
    fontSize: 35,
    letterSpacing: 3,
    fontFamily: Fonts.HubballiRegular,
  },
  containerBalance: {
    maxHeight: 100,
    paddingVertical: 10,
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 30,
    borderRadius: 8,
    backgroundColor: Colors.greyLight,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  titleCurrency: {
    color: Colors.black,
    fontSize: 22,
    fontFamily: Fonts.MontserratRegular,
  },
  titleCurrencyTransform: {
    color: Colors.black,
    marginTop: 5,
    fontSize: 15,
    fontFamily: Fonts.MontserratLight,
  },
  containerLastMovements: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  titleLastMovements: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.MontserratSemiBold,
  },
  titleButtonShowMore: {
    color: Colors.blue,
    fontSize: 16,
    fontFamily: Fonts.MontserratSemiBold,
  },
});

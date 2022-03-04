import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
  },
  btn: {
    marginTop: 35,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  titleBtn: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.MontserratSemiBold,
  },
});

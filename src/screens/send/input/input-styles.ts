import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { Platform, StyleSheet } from 'react-native';

/*
 ** Styles
 */
export const styles = StyleSheet.create({
  containerInput: {
    marginTop: 40,
    padding: 20,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: Colors.greyLight,
    borderRadius: 8,
  },
  contentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    padding: 0,
    margin: 0,
    width: '90%',
    color: Colors.black,
    fontFamily: Fonts.MontserratRegular,
  },
  line: {
    height: 1,
    marginTop: Platform.OS === 'ios' ? 5 : 0,
    width: '90%',
  },
  textError: {
    marginTop: 5,
    color: Colors.red,
    fontFamily: Fonts.MontserratRegular,
    fontSize: 12,
  },
  titleComision: {
    marginTop: 5,
    fontFamily: Fonts.MontserratRegular,
    color: Colors.black,
    fontSize: 12,
  },
  titleTotal: {
    marginTop: 5,
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.black,
    fontSize: 12,
  },
  titleBalance: {
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: Fonts.MontserratRegular,
    color: Colors.black,
    fontSize: 15,
  },
});

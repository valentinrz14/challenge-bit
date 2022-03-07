import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { StyleSheet } from 'react-native';
/*
 ** Styles
 */

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
  },
  container: {
    marginTop: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  content: {
    marginVertical: 10,
    backgroundColor: Colors.greyLight,
    padding: 10,
    borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
  title: {
    fontFamily: Fonts.MontserratLight,
    color: Colors.greyDark,
    fontSize: 12,
  },
  subtitle: {
    fontFamily: Fonts.MontserratRegular,
    color: Colors.black,
    fontSize: 12,
    marginVertical: 5,
  },
});

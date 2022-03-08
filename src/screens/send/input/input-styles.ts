import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { getShadowStyle } from '@core/utils/get-shadow-style/get-shadow-style';
import { Platform, StyleSheet } from 'react-native';

/*
 ** Styles
 */
export const styles = StyleSheet.create({
  containerInput: {
    marginTop: 40,
    padding: 20,
    ...getShadowStyle({
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 4,
    }),
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
  title: { marginTop: 5 },
  titleBalance: {
    marginBottom: 8,
    textAlign: 'center',
  },
});

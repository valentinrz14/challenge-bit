import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { Platform, StyleSheet } from 'react-native';

/*
 ** Constants
 */
const PADDING_MAIN_CONTAINER = 20;

/*
 ** Styles
 */

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: PADDING_MAIN_CONTAINER,
    paddingVertical: PADDING_MAIN_CONTAINER,
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
  },
  contentList: {
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: Colors.greyLight,
  },
  itemSeparator: {
    width: '100%',
    backgroundColor: Colors.greyMedium,
    height: 1,
    marginVertical: 10,
  },
  containerListEmpty: {
    flex: 1,
    backgroundColor: Colors.greyLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleListEmpty: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.MontserratRegular,
  },
});

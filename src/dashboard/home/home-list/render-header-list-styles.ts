import { StyleSheet } from 'react-native';
import { Colors } from '../../../core/styles/colors';
import { Fonts } from '../../../core/styles/fonts';

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 10, marginTop: 20 },
  title: {
    color: Colors.black,
    fontSize: 25,
    fontFamily: Fonts.HubballiRegular,
  },
  containerBalance: {
    marginTop: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: Colors.gray,
  },
  titleCurrency: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: Fonts.HubballiRegular,
  },
  titleCurrencyTransform: {
    color: Colors.gray,
    fontSize: 18,
    fontFamily: Fonts.HubballiRegular,
  },
});

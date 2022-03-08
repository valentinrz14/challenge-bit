import { Colors } from '@core/styles/colors';
import { MarginsVertical, PaddingsHorizontal } from '@core/styles/spaces';
import { getShadowStyle } from '@core/utils/get-shadow-style/get-shadow-style';
import { StyleSheet } from 'react-native';
/*
 ** Styles
 */

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginTop: 20,
    backgroundColor: Colors.white,
    paddingHorizontal: PaddingsHorizontal.extraLarge,
  },
  content: {
    marginVertical: MarginsVertical.medium,
    backgroundColor: Colors.greyLight,
    padding: 10,
    borderRadius: 8,
    ...getShadowStyle({
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 4,
    }),
  },
});

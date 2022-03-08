import { Colors } from '@core/styles/colors';
import { PaddingsHorizontal, PaddingsVertical } from '@core/styles/spaces';
import { getShadowStyle } from '@core/utils/get-shadow-style/get-shadow-style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    paddingTop: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: PaddingsHorizontal.large,
  },
  btn: {
    marginTop: 35,
    paddingHorizontal: PaddingsHorizontal.extraLarge,
    paddingVertical: PaddingsVertical.large,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    ...getShadowStyle({
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 4,
    }),
  },
});

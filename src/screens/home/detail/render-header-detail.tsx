import { HomeListStateEnum } from '@api/types';
import { ChallengeBitIcon } from '@core/components/icon';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
 ** Types
 */

interface RenderHeaderDetailProps {
  state?: keyof typeof HomeListStateEnum;
}

/*
 ** Styles
 */
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    fontFamily: Fonts.MontserratMedium,
    color: Colors.black,
    fontSize: 20,
  },
});
/*
 ** Component
 */

export const RenderHeaderDetail: FunctionComponent<RenderHeaderDetailProps> = ({
  state,
}) => {
  return (
    <View style={styles.container}>
      {state === 'Aceptado' ? (
        <ChallengeBitIcon
          iconProps={{
            name: 'check-circle',
            size: 120,
            color: Colors.green,
          }}
        />
      ) : (
        <ChallengeBitIcon
          iconProps={{
            name: 'close-circle-outline',
            size: 120,
            color: Colors.red,
          }}
        />
      )}
      {state === 'Aceptado' ? (
        <Text style={styles.title}>Envio exitoso</Text>
      ) : (
        <Text style={styles.title}>Envio Rechazado</Text>
      )}
    </View>
  );
};

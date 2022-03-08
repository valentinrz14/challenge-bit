import { HomeListStateEnum } from '@api/types';
import { ChallengeBitIcon } from '@core/components/icon';
import { H4 } from '@core/components/Typography/h4';
import { Colors } from '@core/styles/colors';
import { PaddingsHorizontal } from '@core/styles/spaces';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

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
    paddingHorizontal: PaddingsHorizontal.extraLarge,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
  },
});
/*
 ** Constants
 */
const SIZE_ICON = 120;
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
            name: 'Check',
            size: SIZE_ICON,
            color: Colors.green,
          }}
        />
      ) : (
        <ChallengeBitIcon
          iconProps={{
            name: 'Error',
            size: SIZE_ICON,
            color: 'transparent',
            colorTwo: Colors.red,
          }}
        />
      )}
      {state === 'Aceptado' ? (
        <H4
          color="black"
          fontFamily="MontserratMedium"
          textStyle={styles.title}
        >
          Envio exitoso
        </H4>
      ) : (
        <H4
          color="black"
          fontFamily="MontserratMedium"
          textStyle={styles.title}
        >
          Envio exitoso
        </H4>
      )}
    </View>
  );
};

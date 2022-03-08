import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@core/styles/colors';
import { LineHorizontal } from '@core/components/line-horizontal';
import { Spacer } from '@core/components/spacer/spacer';
import { H7 } from '@core/components/Typography';
import { MarginsVertical } from '@core/styles/spaces';

/*
 ** Types
 */

interface RenderContentDetailProps {
  title?: string;
  subtitle?: string;
}

/*
 ** Styles
 */
const styles = StyleSheet.create({
  subtitle: {
    marginVertical: MarginsVertical.small,
  },
});
/*
 ** Component
 */

export const RenderContentDetail: FunctionComponent<
  RenderContentDetailProps
> = ({ title, subtitle }) => {
  return (
    <>
      <H7 color="black" fontFamily="MontserratLight">
        {title}
      </H7>
      <H7
        color="black"
        fontFamily="MontserratRegular"
        textStyle={styles.subtitle}
      >
        {subtitle}
      </H7>
      <LineHorizontal height={1} bgColor={Colors.greyMedium} />
      <Spacer height={5} />
    </>
  );
};

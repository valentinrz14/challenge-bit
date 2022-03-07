import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '@core/styles/colors';
import { Fonts } from '@core/styles/fonts';
import { LineHorizontal } from '@core/components/line-horizontal';
import { Spacer } from '@core/components/spacer/spacer';

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
  title: {
    color: Colors.black,
    fontFamily: Fonts.MontserratLight,
    fontSize: 12,
  },
  subtitle: {
    color: Colors.black,
    fontFamily: Fonts.MontserratRegular,
    fontSize: 12,
    marginVertical: 5,
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
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <LineHorizontal height={1} bgColor={Colors.greyMedium} />
      <Spacer height={5} />
    </>
  );
};

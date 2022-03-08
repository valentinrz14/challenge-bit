import { ColorsEnum } from '@core/styles/colors';
import { FontsTypes } from '@core/styles/fonts';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export interface TypographyProps extends TextProps {
  color?: ColorsEnum;
  fontFamily: FontsTypes;
  textStyle?: StyleProp<TextStyle>;
}

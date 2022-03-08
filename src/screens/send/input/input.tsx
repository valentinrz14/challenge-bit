import React, { FunctionComponent } from 'react';
import { Colors } from '@core-styles/colors';
import { FormikHandlers, FormikValues } from 'formik';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChallengeBitIcon } from '@core/components/icon';
import { FormValues } from '@screens/send/input/types';
import { styles } from '@screens/send/input/input-styles';
import { H6, H7 } from '@core/components/Typography';

/*
 ** Types
 */

interface InputProps extends TextInputProps {
  handleChange: FormikHandlers['handleChange'];
  handleOnBlur: FormikHandlers['handleBlur'];
  values: FormikValues;
  balance?: number;
  name: keyof FormValues;
  error?: boolean | string;
  textError?: string;
  icon?: {
    name: string;
    color: string;
    size: number;
    handleOnPress?: () => void;
    disabled?: boolean;
  };
  fees?: number;
  comision?: boolean;
}

/*
 ** Component
 */

export const Input: FunctionComponent<InputProps> = ({
  handleChange,
  handleOnBlur,
  values,
  placeholder,
  name,
  keyboardType,
  textContentType,
  textError,
  error,
  icon,
  balance,
  fees,
  comision,
  ...props
}) => {
  const validationBorderColor = () => {
    if (values[name] === '' || values[name] === '0.0') {
      return Colors.greyMedium;
    } else if (error || textError) {
      return Colors.red;
    } else {
      return Colors.blue;
    }
  };

  const TOTAL = (Number(values.amount) + Number(fees)).toFixed(7);

  return (
    <View style={styles.containerInput}>
      {comision && (
        <H6
          color="black"
          fontFamily="MontserratRegular"
          textStyle={styles.titleBalance}
        >
          Tu balance: {balance} BTC
        </H6>
      )}
      <View style={styles.contentInput}>
        <TextInput
          style={styles.input}
          allowFontScaling
          maxFontSizeMultiplier={2}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={Colors.greyDark}
          placeholder={placeholder}
          onChangeText={handleChange(name)}
          onBlur={handleOnBlur(name)}
          value={values[name]}
          textContentType={textContentType}
          keyboardType={keyboardType}
          {...props}
        />
        {icon && (
          <TouchableOpacity
            disabled={icon.disabled}
            onPress={icon.handleOnPress}
          >
            <ChallengeBitIcon
              iconProps={{
                name: icon.name,
                size: icon.size,
                color: icon.color,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={[styles.line, { backgroundColor: validationBorderColor() }]}
      />
      {error && (
        <H7 fontFamily="MontserratRegular" color="red" textStyle={styles.title}>
          {textError}
        </H7>
      )}
      {comision && (
        <H7
          fontFamily="MontserratRegular"
          color="black"
          textStyle={styles.title}
        >
          Comision de la red: {fees} BTC
        </H7>
      )}
      {!error && comision && (
        <H7
          fontFamily="MontserratSemiBold"
          color="black"
          textStyle={styles.title}
        >
          Total: {TOTAL} BTC
        </H7>
      )}
    </View>
  );
};

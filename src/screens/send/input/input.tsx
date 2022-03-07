import React, { FunctionComponent } from 'react';
import { Colors } from '@core-styles/colors';
import { FormikHandlers, FormikValues } from 'formik';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChallengeBitIcon } from '@core/components/icon';
import { FormValues } from '@screens/send/input/types';
import { styles } from '@screens/send/input/input-styles';

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
    if (values[name] === '' || values[name] === '0') {
      return Colors.greyMedium;
    } else if (error || textError) {
      return Colors.red;
    } else {
      return Colors.blue;
    }
  };

  const TOTAL = (Number(values.amount) + Number(fees)).toFixed(8);
  console.log(TOTAL);

  return (
    <View style={styles.containerInput}>
      {comision && (
        <Text style={styles.titleBalance}>Tu balance: {balance} BTC</Text>
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
      {error && textError && <Text style={styles.textError}>{textError}</Text>}
      {comision && (
        <Text style={styles.titleComision}>Comision de la red: {fees} BTC</Text>
      )}
      {!error && !textError && comision && (
        <Text style={styles.titleTotal}>Total: {TOTAL} BTC</Text>
      )}
    </View>
  );
};

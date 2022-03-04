import React, { FunctionComponent } from 'react';
import { Colors } from '@core-styles/colors';
import { Fonts } from '@core-styles/fonts';
import { FormikHandlers, FormikValues } from 'formik';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChallengeBitIcon } from '@core/components/icon';
import { useGetBalance } from '@core/hooks/useGetBalance';

/*
 ** Types
 */

interface InputProps extends TextInputProps {
  handleChange: FormikHandlers['handleChange'];
  handleOnBlur: FormikHandlers['handleBlur'];
  values: FormikValues;
  name: string;
  error?: boolean | string;
  textError?: string;
  icon?: {
    name: string;
    color: string;
    size: number;
    handleOnPress?: () => void;
    disabled?: boolean;
  };
  comision?: boolean;
}

/*
 ** Styles
 */

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 40,
    padding: 20,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: Colors.gray,
    borderRadius: 8,
  },
  contentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    padding: 0,
    margin: 0,
    width: '90%',
    color: Colors.black,
    fontFamily: Fonts.MontserratRegular,
  },
  line: {
    height: 1,
    marginTop: Platform.OS === 'ios' ? 5 : 0,
    width: '90%',
  },
  textError: {
    marginTop: 5,
    color: Colors.red,
    fontFamily: Fonts.MontserratRegular,
    fontSize: 12,
  },
  titleComision: {
    marginTop: 5,
    fontFamily: Fonts.MontserratRegular,
    color: Colors.black,
    fontSize: 12,
  },
  titleBalance: {
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: Fonts.MontserratRegular,
    color: Colors.black,
    fontSize: 15,
  },
});

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
  comision,
  ...props
}) => {
  const { balance } = useGetBalance();
  const validationBorderColor = () => {
    if (values[name] === '') {
      return Colors.grayDark;
    } else if (error || textError) {
      return Colors.red;
    } else {
      return Colors.blue;
    }
  };

  return (
    <View style={styles.containerInput}>
      {comision && (
        <Text style={styles.titleBalance}>Tu balance: {balance}</Text>
      )}
      <View style={styles.contentInput}>
        <TextInput
          style={styles.input}
          allowFontScaling
          maxFontSizeMultiplier={2}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={Colors.grayDark}
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
            onPress={icon.handleOnPress}>
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
        <Text style={styles.titleComision}>Comision de la red: 0.12</Text>
      )}
    </View>
  );
};

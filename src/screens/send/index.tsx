import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from '@screens/send/send-styles';
import { Colors } from '@core/styles/colors';
import { Input } from '@screens/send/input/input';
import { useGetBalance } from '@core/hooks/useGetBalance';

/*
 ** Types
 */

interface SendScreenProps {}

interface FormValues {
  email: string;
  amount: string;
  currency: string;
}

/*
 ** Constants
 */
const initialValues: FormValues = {
  email: '',
  amount: '',
  currency: 'BTC',
};

const FormSchema = (balance: string) =>
  Yup.object().shape({
    email: Yup.string()
      .matches(/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/gm, 'Direccion invalida')
      .required('Ingresa una Direccion de BTC'),
    amount: Yup.string()
      .max(Number(balance), 'No tenes fondos suficientes')
      .required('Debes ingresar un numero mayor a 0'),
  });

/*
 ** Component
 */

export const SendScreen: FunctionComponent<SendScreenProps> = () => {
  const handleQrPress = () => {};
  const { balance } = useGetBalance();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Enviar BTC</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema(balance)}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors: { email: errorEmail, amount: amountError },
          touched: { email: touchedEmail, amount: touchedAmount },
        }) => (
          <View style={styles.container}>
            <Input
              name="email"
              placeholder="Dirreccion de BTC"
              keyboardType="email-address"
              textContentType="emailAddress"
              values={values}
              handleChange={handleChange}
              handleOnBlur={handleBlur}
              icon={{
                name: 'qrcode',
                size: 20,
                color: Colors.black,
                handleOnPress: handleQrPress,
              }}
              textError={errorEmail}
              error={errorEmail && touchedEmail}
            />
            <Input
              name="amount"
              placeholder="Monto a enviar"
              keyboardType="numeric"
              values={values}
              handleChange={handleChange}
              handleOnBlur={handleBlur}
              icon={{
                name: 'dollar',
                size: 20,
                color: Colors.black,
                disabled: true,
              }}
              comision={true}
              textError={amountError}
              error={amountError && touchedAmount}
            />
            <TouchableOpacity
              style={[
                styles.btn,
                { backgroundColor: isValid ? Colors.blue : Colors.grayDark },
              ]}
              disabled={!isValid}
              onPress={handleSubmit}>
              <Text style={styles.titleBtn}>Enviar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

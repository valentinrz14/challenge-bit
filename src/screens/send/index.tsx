import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from '@screens/send/send-styles';
import { Colors } from '@core/styles/colors';
import { Input } from '@screens/send/input/input';
import { CompositeScreenProps } from '@react-navigation/native';
import { DashboardStackParamsList } from '@navigation/types';
import { SendStackParamsList } from '@navigation/send/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useGetFees } from '@screens/send/hook/use-get-fees';
import { Loading } from '@core/components/loading';
import { FormValues } from '@screens/send/input/types';
import { useSelector } from 'react-redux';
import { ReduxRootState } from '@store/types';
import { H2 } from '@core/components/Typography/h2';
import { H5 } from '@core/components/Typography/h5';

/*
 ** Types
 */
type SendScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<DashboardStackParamsList, 'SendStack'>,
  NativeStackScreenProps<SendStackParamsList>
>;

interface SendScreenProps extends SendScreenNavigationProp {}

/*
 ** Constants
 */
const initialValues: FormValues = {
  email: '',
  amount: '0.0',
  currency: 'BTC',
};

const FormSchema = (balance: number, fees: number) =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .matches(/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/gm, 'Direccion invalida')
      .required('Ingresa una Direccion de BTC'),
    amount: Yup.number()
      .positive()
      .min(0.0000001, 'El monto debe ser mayor a 0.0000001 BTC')
      .required('Debes ingresar un monto a enviar')
      .test('amount', 'No tenes fondos suficientes', (value?: number) => {
        if (value && fees + value <= balance) {
          return true;
        } else {
          return false;
        }
      }),
  });

/*
 ** Component
 */

export const SendScreen: FunctionComponent<SendScreenProps> = ({
  navigation,
}) => {
  const { isFetching: isFetchingFees, fees } = useGetFees();
  const { balance } = useSelector((state: ReduxRootState) => state.home);

  const handleSubmitPress = (values: FormValues) => {
    const amount = (Number(values.amount) + Number(fees)).toFixed(7);

    navigation.navigate('SendLayoutLoadingOperation', {
      ...values,
      amount: Number(amount),
    });
  };

  const handleQrPress = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <H2
        color="black"
        fontFamily="MontserratSemiBold"
        textStyle={styles.title}
      >
        Enviar BTC
      </H2>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema(balance, fees || 0)}
        onSubmit={handleSubmitPress}
      >
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
            {isFetchingFees ? (
              <Loading />
            ) : (
              <Input
                name="amount"
                placeholder="Monto a enviar"
                keyboardType="numeric"
                values={values}
                handleChange={handleChange}
                handleOnBlur={handleBlur}
                maxLength={9}
                icon={{
                  name: 'currency-usd',
                  size: 25,
                  color: Colors.black,
                  disabled: true,
                }}
                comision={true}
                textError={amountError}
                error={amountError && touchedAmount}
                balance={balance}
                fees={fees}
              />
            )}

            <TouchableOpacity
              style={[
                styles.btn,
                { backgroundColor: isValid ? Colors.blue : Colors.grey },
              ]}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <H5 color="white" fontFamily="MontserratSemiBold">
                Enviar
              </H5>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

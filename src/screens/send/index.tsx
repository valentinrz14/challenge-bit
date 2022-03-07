import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
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
import { LayoutLoading } from '@core/components/layout-loading';
import { FormValues } from '@screens/send/input/types';
import { useSelector } from 'react-redux';
import { ReduxRootState } from '@store/types';

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

const FormSchema = (balance: number, feed: number) =>
  Yup.object().shape({
    email: Yup.string()
      .matches(/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/gm, 'Direccion invalida')
      .required('Ingresa una Direccion de BTC'),
    amount: Yup.number()
      .max(
        balance - feed,
        `No tenes fondos suficientes, recorda que se suma la comision (${feed} BTC)`,
      )
      .moreThan(0.00000001, 'El monto debe ser mayor a 0.00000001 BTC')
      .required('Debes ingresar un monto a enviar'),
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
    navigation.navigate('SendLayoutLoadingOperation', {
      ...values,
      amount: Number(values.amount),
    });
  };

  const handleQrPress = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Enviar BTC</Text>
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
              <LayoutLoading />
            ) : (
              <Input
                name="amount"
                placeholder="Monto a enviar"
                keyboardType="numeric"
                values={values}
                handleChange={handleChange}
                handleOnBlur={handleBlur}
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
              <Text style={styles.titleBtn}>Enviar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

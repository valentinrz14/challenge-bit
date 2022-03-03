import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStack } from './src/navigation/dashboard';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App: FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DashboardStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

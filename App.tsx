import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStack } from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

export const App: FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <DashboardStack />
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

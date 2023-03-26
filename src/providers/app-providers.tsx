import React, { PropsWithChildren } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from '../store/store';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>{children}</NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default AppProviders;

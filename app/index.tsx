import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import HomePage from '@/src/Frontend/Client/Pages/HomePage';
import LoginPage from '@/src/Frontend/Client/Pages/LoginPage';

import { Routes } from '@/src/Frontend/Client/Routes/routes';
import { store } from '../src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <StoreProvider store={store}>
      <PaperProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.LOGIN} component={LoginPage} />
            <Stack.Screen name={Routes.HOME} component={HomePage} />
          </Stack.Navigator>
      </PaperProvider>
    </StoreProvider>
  );
}
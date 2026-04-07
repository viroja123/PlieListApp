/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNav } from './src/navigation/AppNav';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  if (!store) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <AppContent />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

function AppContent() {
  return <AppNav />;
}

export default App;

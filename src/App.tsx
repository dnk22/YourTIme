import React from 'react';
import {
  ActivityIndicator,
  LogBox,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import AppNavigators from 'navigation/index';
import { MyAppTheme } from 'resources/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { logBoxIgnore } from 'utils/constant';

LogBox.ignoreLogs(logBoxIgnore);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <ActivityIndicator style={{ flex: 1 }} size="small" color="#0000ff" />
        }
        persistor={persistor}
      >
        <NavigationContainer
          theme={MyAppTheme[isDarkMode ? 'dark' : 'default']}
        >
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppNavigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

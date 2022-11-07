import React from 'react';
import { ActivityIndicator, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { navigationRef } from './navigation/utils';
import { persistor, store } from './store';
import AppNavigators from 'navigation/index';
import { MyAppTheme } from 'resources/theme';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="small" color="#0000ff" />}
        persistor={persistor}
      >
        <NavigationContainer
          ref={navigationRef}
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

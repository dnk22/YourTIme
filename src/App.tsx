import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { navigationRef } from './navigation/utils';
import { store } from './store';
import AppNavigators from 'navigation/index';
import { MyAppTheme } from 'resources/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        theme={MyAppTheme[isDarkMode ? 'dark' : 'default']}
      >
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigators />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

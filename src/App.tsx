import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigators/utils';
import { store } from './store';
import { Provider } from 'react-redux';
import AppNavigators from 'navigators';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigators />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

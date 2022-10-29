import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigators/utils';
import AppNavigators from './navigators';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigators />
    </NavigationContainer>
  );
};

export default App;

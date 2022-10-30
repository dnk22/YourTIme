import React from 'react';
import { StatusBar, useColorScheme, SafeAreaView } from 'react-native';
import { Theme } from '@react-navigation/native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { navigationRef } from './navigators/utils';
import { store } from './store';
import { Provider } from 'react-redux';
import AppNavigators from 'navigators';
import { THEME } from './utils/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const customThemeLight = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...THEME.light,
    },
  };
  const customThemeDark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...THEME.dark,
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        theme={isDarkMode ? customThemeDark : customThemeLight}
      >
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigators />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

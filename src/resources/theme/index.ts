import React from 'react';
import {
  useTheme,
  Theme,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeColors = typeof lightTheme;

export type ThemeType = {
  colors: ThemeColors;
} & Theme;

const CustomLightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...lightTheme,
  },
};

const CustomDarkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    ...darkTheme,
  },
};

const MyAppTheme = {
  default: CustomLightTheme,
  dark: CustomDarkTheme,
};

const useCustomTheme = useTheme as () => ThemeType;

export const ThemeContext = React.createContext({});
export { MyAppTheme, useCustomTheme, ThemeEnum };

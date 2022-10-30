import { Theme } from '@react-navigation/native';

export type TCustomTheme = {
  colors: {
    surface: string;
  };
} & Theme;

export const THEME = {
  light: {
    surface: 'white',
    background: 'rgb(242, 242, 242)',
  },
  dark: {
    surface: '#182747',
    background: '#1B2430',
  },
};
// 1B2430

export const COLORS = {
  iconBottomBarActive: '#1DAEFF',
  transparentColor: 'rgba(52, 52, 52, 0.8)',
};

export const SIZE = {
  bottomBarHeight: 90,
  iconSize: {
    width: 28,
    height: 28,
  },
};

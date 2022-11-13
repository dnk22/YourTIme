import { ReactI18NextChild } from 'react-i18next';
import { TextProps } from 'react-native';

export interface TTextProps extends TextProps {
  text?: 'string';
  children: string | ReactI18NextChild;
  t18n?: any;
  t18nOptions?: any;
}

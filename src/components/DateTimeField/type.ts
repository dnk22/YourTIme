import { Control } from 'react-hook-form';
import { StyleProp, TextStyle } from 'react-native';
import { IOSNativeProps } from '@react-native-community/datetimepicker';
type RNDateTimePicker = IOSNativeProps;

export interface IDateTimeFieldProps extends RNDateTimePicker {
  name: any;
  control: Control<any, any>;
  mode?: 'date' | 'time' | 'datetime' | 'countdown' | undefined;
  style?: StyleProp<TextStyle> | any;
  [key: string]: any;
}

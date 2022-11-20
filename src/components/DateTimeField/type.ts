import { Control } from 'react-hook-form';
import { IOSNativeProps } from '@react-native-community/datetimepicker';

type RNDateTimePicker = IOSNativeProps;
export interface IDateTimeFieldProps extends RNDateTimePicker {
  name: any;
  control: Control<any, any>;
}

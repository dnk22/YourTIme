import { Control } from 'react-hook-form';
export interface ISwitchProps {
  style?: any;
  ios_backgroundColor?: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void | Promise<any>;
  [key: string]: any;
}

export interface ISwitchFieldProps {
  name: string;
  control: Control<any, any>;
}

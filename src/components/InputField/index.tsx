import React, { memo } from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import { Control, useController } from 'react-hook-form';
import stylesInline from './styles';
import isEqual from 'react-fast-compare';

interface IInputField {
  name: string;
  defaultValue?: any;
  control: Control<any, any>;
  style?: StyleProp<TextStyle> | any;
  [key: string]: any;
}

function InputField({
  name,
  defaultValue,
  control,
  style,
  ...props
}: IInputField) {
  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      style={[stylesInline, style]}
      {...props}
    />
  );
}

export default memo(InputField, isEqual);

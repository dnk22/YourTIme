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
  const {
    field: { value, onChange, onBlur },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      style={[stylesInline, style]}
      {...props}
    />
  );
}

export default memo(InputField, isEqual);

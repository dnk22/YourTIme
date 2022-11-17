import React, { memo } from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';
import { Control, useController } from 'react-hook-form';
import stylesInline from './styles';
import isEqual from 'react-fast-compare';
import { useCustomTheme } from 'resources/theme';

interface IInputField extends TextInputProps {
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
  const { colors } = useCustomTheme();
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
      style={[stylesInline, style, { color: colors.text }]}
      {...props}
    />
  );
}

export default memo(InputField, isEqual);

import React from 'react';
import styles from './styles';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';

type FormType = {
  onValueChange: (value: any) => void;
  borderColor?: string;
};

export default function Form({ onValueChange, borderColor }: FormType) {
  const onHandleInputChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const { text } = event.nativeEvent;
    console.log(text);
  };
  return (
    <TextInput
      style={[styles.formInput, { borderColor }]}
      keyboardType={'number-pad'}
      onChange={onHandleInputChange}
    />
  );
}

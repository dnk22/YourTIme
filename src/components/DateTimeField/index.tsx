import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useController } from 'react-hook-form';
import { IDateTimeFieldProps } from './type';

function DateTimeField({
  name,
  control,
  mode = 'date',
  display,
  ...rest
}: IDateTimeFieldProps) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <DateTimePicker
      {...rest}
      value={new Date(value)}
      locale="vi"
      mode={mode}
      display={display}
      onChange={(e, date) => onChange(date)}
    />
  );
}

export default memo(DateTimeField, isEqual);

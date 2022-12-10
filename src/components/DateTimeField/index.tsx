import React, { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
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

  const setDate = useCallback((event: DateTimePickerEvent, date?: Date) => {
    onChange(date);
  }, []);

  return (
    <DateTimePicker
      {...rest}
      value={new Date(value)}
      locale="vi"
      mode={mode}
      display={display}
      onChange={setDate}
    />
  );
}

export default memo(DateTimeField, isEqual);

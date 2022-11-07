import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Switch as RNSwitch } from 'react-native';
import { ISwitchProps } from './type';

function Switch({
  style,
  ios_backgroundColor,
  value,
  onValueChange,
  ...rest
}: ISwitchProps) {
  return (
    <RNSwitch
      ios_backgroundColor={ios_backgroundColor || '#3e3e3e'}
      onValueChange={onValueChange}
      style={[style]}
      value={value}
      {...rest}
    />
  );
}
export default memo(Switch, isEqual);

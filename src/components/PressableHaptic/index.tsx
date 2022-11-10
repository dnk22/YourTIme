import React, { memo } from 'react';
import {
  Pressable,
  PressableProps,
  View,
  GestureResponderEvent,
} from 'react-native';
import isEqual from 'react-fast-compare';
import { hapticFeedback } from 'utils/haptic';

type baseType = PressableProps & React.RefAttributes<View>;

export interface IPressableHapticProps extends baseType {
  children: React.ReactNode;
  useHaptic?: boolean;
}
function PressableHaptic({
  children,
  useHaptic = true,
  onPress,
  ...rest
}: IPressableHapticProps) {
  const onHandlePress = (event: GestureResponderEvent) => {
    onPress && onPress(event);
    if (useHaptic) {
      hapticFeedback();
    }
  };
  return (
    <Pressable {...rest} onPress={onHandlePress}>
      {children}
    </Pressable>
  );
}

export default memo(PressableHaptic, isEqual);

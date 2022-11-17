import React, { useEffect, memo } from 'react';
import { View, Pressable } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import isEqual from 'react-fast-compare';

interface IExpandViewAnimatedProps {
  onToggle: () => void;
  colors: any;
  children?: React.ReactNode;
  height?: number | string;
}
const ExpandViewAnimated = ({
  onToggle,
  colors,
  children,
  height = '60%',
}: IExpandViewAnimatedProps) => {
  const formAnimatedValue = useSharedValue(0);
  const formStyles = useAnimatedStyle(() => {
    let toValue: string | number = formAnimatedValue.value;
    if (height.toString().includes('%')) {
      toValue = `${formAnimatedValue.value}%`;
    }
    return {
      height: withTiming(toValue, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  useEffect(() => {
    formAnimatedValue.value = parseInt(height, 10);
    return () => {
      formAnimatedValue.value = 0;
    };
  }, [formAnimatedValue, height]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.listView,
          formStyles,
          { backgroundColor: colors.surface },
        ]}
      >
        {children}
      </Animated.View>
      <Pressable onPress={onToggle} style={styles.backDrop} />
    </View>
  );
};

export default memo(ExpandViewAnimated, isEqual);

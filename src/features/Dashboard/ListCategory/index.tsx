import React, { useEffect, memo } from 'react';
import { View, Pressable } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

interface IListCategoryProps {
  onToggle: () => void;
  colors: any;
  children?: React.ReactNode;
}
const ListCategory = ({ onToggle, colors, children }: IListCategoryProps) => {
  const formAnimatedValue = useSharedValue(0);
  const formStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(`${formAnimatedValue.value}%`, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  useEffect(() => {
    formAnimatedValue.value = 60;
    return () => {
      formAnimatedValue.value = 0;
    };
  }, [formAnimatedValue]);

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

export default memo(ListCategory);

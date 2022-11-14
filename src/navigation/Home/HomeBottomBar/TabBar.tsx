import React, { useEffect, useRef } from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { LayoutChangeEvent, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

type ITabBarProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
  colors: any;
};

const TabBar = ({
  active,
  options,
  onLayout,
  onPress,
  colors,
}: ITabBarProps) => {
  // handle lottie animation -----------------------------------------
  const ref = useRef(null);

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 400 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 400 }),
    };
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={active}
      onLayout={onLayout}
      style={styles.component}
    >
      <Animated.View
        style={[
          styles.componentCircle,
          animatedComponentCircleStyles,
          { backgroundColor: colors.primary },
        ]}
      />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {/* {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>} */}
        {/* @ts-ignore */}
        {options.tabBarIcon({ ref })}
      </Animated.View>
    </Pressable>
  );
};

export default TabBar;

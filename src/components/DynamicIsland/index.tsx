import React, { memo } from 'react';
import { View } from 'react-native';
import isEqual from 'react-fast-compare';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import { useSwipe } from 'share/hook.custom';
import { SCREEN_WIDTH } from 'share/scale';

const init = {
  height: 0,
  width: 200,
  marginTop: 0,
  borderRadius: 30,
};

interface AlertSelectionProps {
  children: React.ReactNode;
}

function AlertSelection({ children }: AlertSelectionProps) {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeUp);

  const widthAnimated = useSharedValue(init.width);
  const heightAnimated = useSharedValue(init.height);
  const marginTopAnimated = useSharedValue(init.marginTop);
  const borderRadiusAnimated = useSharedValue(init.borderRadius);

  function onSwipeUp() {
    toggle();
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(widthAnimated.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      height: withTiming(heightAnimated.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      marginTop: withTiming(marginTopAnimated.value, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      borderRadius: withTiming(borderRadiusAnimated.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const toggle = () => {
    widthAnimated.value =
      widthAnimated.value === init.width ? SCREEN_WIDTH - 20 : init.width;
    heightAnimated.value =
      heightAnimated.value === init.height ? 300 : init.height;
    marginTopAnimated.value =
      marginTopAnimated.value === init.marginTop ? 40 : init.marginTop;
    borderRadiusAnimated.value =
      borderRadiusAnimated.value === init.borderRadius ? 17 : init.borderRadius;
  };

  return (
    <View style={[styles.headerBar, { width: SCREEN_WIDTH }]}>
      <Animated.View
        style={[styles.popup, animatedStyles]}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </Animated.View>
    </View>
  );
}

export default memo(AlertSelection, isEqual);

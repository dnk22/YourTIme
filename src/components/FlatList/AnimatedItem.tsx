import React, { memo } from 'react';
import { ViewToken } from 'react-native';
import isEqual from 'react-fast-compare';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type AnimatedItemProps = {
  viewableItems: any;
  item: any;
};

function AnimatedItem({ item, viewableItems }: AnimatedItemProps) {
  console.log(viewableItems, 'viewableItems');
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(viewableItems);

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: 80,
          width: '90%',
          backgroundColor: '#78CAD2',
          alignSelf: 'center',
          borderRadius: 15,
          marginTop: 20,
        },
        rStyle,
      ]}
    />
  );
}

export default memo(AnimatedItem, isEqual);

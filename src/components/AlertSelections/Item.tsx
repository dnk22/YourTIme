import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { AlertItemProps } from 'utils/types';
import { SvgIcon, PressableHaptic } from 'components/index';
import styles from './styles';
import isEqual from 'react-fast-compare';
import { ThemeColors } from 'resources/theme';

export interface ItemProps {
  item: AlertItemProps;
  onPress: (item: AlertItemProps) => void;
  isActive: boolean;
  colors: ThemeColors;
}

function Item({ item, onPress, isActive, colors }: ItemProps) {
  const { name } = item;
  const bellIcon = isActive ? 'bell' : 'bellSlash';
  const rotationIconValue = useSharedValue('0deg');
  const strikeWidthAnimatedValue = useSharedValue('0%');

  const strikeAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(strikeWidthAnimatedValue.value, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const rotationAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: withTiming(rotationIconValue.value, {
            duration: 400,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    };
  });

  useEffect(() => {
    strikeWidthAnimatedValue.value = isActive ? '0%' : '100%';
    rotationIconValue.value = isActive ? '45deg' : '0deg';
  }, [isActive]);

  const onHandlePressItem = () => {
    onPress(item);
  };

  return (
    <PressableHaptic
      style={[styles.alertItem, { backgroundColor: colors.background }]}
      onPress={onHandlePressItem}
    >
      <View style={styles.alertItemContent}>
        <SvgIcon
          name={bellIcon}
          preset="alertIcon"
          style={styles.alertItemIcon}
        />
        <View>
          <Text
            numberOfLines={2}
            style={[styles.alertItemText, { color: colors.text }]}
          >
            {name}
          </Text>
          <Animated.View
            style={[
              styles.textStrike,
              { backgroundColor: colors.text },
              strikeAnimatedStyle,
            ]}
          />
        </View>
      </View>
      <Animated.View style={rotationAnimatedStyle}>
        <SvgIcon name="add" preset="alertIcon" />
      </Animated.View>
    </PressableHaptic>
  );
}

export default memo(Item, isEqual);

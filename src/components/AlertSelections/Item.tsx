import React, { useEffect } from 'react';
import { Pressable, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { AlertItemProps } from 'utils/types';
import styles from './styles';

export interface ItemProps {
  item: AlertItemProps;
  onPress: (item: AlertItemProps) => void;
  defaultValues: number[];
}

function Item({ item, onPress, defaultValues }: ItemProps) {
  const { name, value } = item;
  const strikeWidthAnimatedValue = useSharedValue('0%');
  const strikeAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(strikeWidthAnimatedValue.value, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const onHandlePressItem = () => {
    onPress(item);
  };

  useEffect(() => {
    strikeWidthAnimatedValue.value = defaultValues.includes(value)
      ? '0%'
      : '100%';
  }, [defaultValues]);

  return (
    <Pressable style={styles.alertItem} onPress={onHandlePressItem}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.alertItemIcon}>+</Text>
        <View>
          <Text numberOfLines={2} style={styles.alertItemText}>
            {name}
          </Text>
          <Animated.View style={[styles.textStrike, strikeAnimatedStyle]} />
        </View>
      </View>
      <Text>X</Text>
    </Pressable>
  );
}

export default Item;

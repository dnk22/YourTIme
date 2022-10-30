import React, { useEffect, memo } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import { DATA } from './data';
import styles from './styles';

import SVG from 'assets/svg/icon-search.svg';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ListCategory = ({
  setShowHide,
  colors,
  isShow,
}: {
  setShowHide: (value: boolean) => void;
  colors: any;
  isShow: boolean;
}) => {
  const formAnimatedValue = useSharedValue(0);
  const formStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(`${formAnimatedValue.value}%`, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      padding: withTiming(formAnimatedValue.value ? 20 : 0, {
        duration: 500,
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

  const renderItem = ({ item }: any) => {
    const onPress = () => console.log('hih');
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.item}>
          <View style={styles.itemIcon}>
            <SVG color={colors.text} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>
            {item.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };
  console.log('render');

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.listView,
          formStyles,
          { backgroundColor: colors.surface },
        ]}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Animated.View>
      <Pressable onPress={() => setShowHide(!isShow)} style={styles.backDrop} />
    </View>
  );
};

export default memo(ListCategory);

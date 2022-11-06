import React, { useEffect, memo, useContext, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import SVG from 'assets/svg/icon-search.svg';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ThemeContext, ThemeType } from 'resources/theme';
import { DATA } from '../data';
import styles from './styles';

const ListCategory = ({
  setShowHide,
  isShow,
}: {
  setShowHide: (value: boolean) => void;
  isShow: boolean;
}) => {
  const { colors } = useContext(ThemeContext) as ThemeType;

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
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor={colors.background}
      >
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

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

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
          keyExtractor={keyExtractor}
        />
      </Animated.View>
      <Pressable onPress={() => setShowHide(!isShow)} style={styles.backDrop} />
    </View>
  );
};

export default memo(ListCategory);

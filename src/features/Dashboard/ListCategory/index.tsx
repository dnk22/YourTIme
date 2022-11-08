import React, { useEffect, memo, useContext } from 'react';
import { View, Text, Pressable, TouchableHighlight } from 'react-native';
import SVG from 'assets/svg/icon-search.svg';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ThemeContext, ThemeType } from 'resources/theme';
import { RootState, useAppSelector } from 'store/index';
import { selectAllReminderCategory } from 'store/reminder/reminder.selector';
import { FlatListComponent } from 'components/index';
import styles from './styles';
import { IReminderCategory } from '../type';

const ListCategory = ({
  setShowHide,
  isShow,
}: {
  setShowHide: (value: boolean) => void;
  isShow: boolean;
}) => {
  const { colors } = useContext(ThemeContext) as ThemeType;
  const getAllReminderCategory = useAppSelector((state: RootState) =>
    selectAllReminderCategory(state),
  );

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

  const renderItem = ({ item }: { item: IReminderCategory }) => {
    const onPress = () => console.log(item.name);
    return (
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor={colors.background}
        style={{ borderRadius: 10 }}
      >
        <View style={styles.item}>
          <View style={styles.itemIcon}>
            <SVG color={colors.text} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>
            {item.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.listView,
          formStyles,
          { backgroundColor: colors.surface },
        ]}
      >
        <FlatListComponent
          data={getAllReminderCategory}
          renderItem={renderItem}
        />
      </Animated.View>
      <Pressable onPress={() => setShowHide(!isShow)} style={styles.backDrop} />
    </View>
  );
};

export default memo(ListCategory);

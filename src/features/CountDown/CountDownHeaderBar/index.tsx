import React, { memo, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import isEqual from 'react-fast-compare';
import { NavigationProp } from '@react-navigation/native';
import styles from './style';
import { ADD_COUNTDOWN } from 'navigation/constants';
import SVGIcon from 'components/SvgIcon';
import { useCustomTheme } from 'resources/theme';

export interface ICountDownHeaderBarProps {
  navigation: NavigationProp<any, any>;
  onToggle: () => void;
}

const CountDownHeaderBar = ({
  navigation,
  onToggle,
}: ICountDownHeaderBarProps) => {
  const { colors } = useCustomTheme();

  const renderIcon = useMemo(() => {
    return (
      <SVGIcon name="arrowUp" preset="expandIcon" />
      // <>
      //   {isModalShow && }
      //   {!isModalShow && <SVGIcon name="arrowDown" preset="expandIcon" />}
      // </>
    );
  }, []);

  const onHandleAddReminderClick = () => {
    navigation.navigate(ADD_COUNTDOWN);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
        },
      ]}
    >
      <View style={[styles.left, styles.centerIcon]}>
        <SVGIcon name="search" />
      </View>
      <View style={[styles.center, styles.centerIcon]}>
        <Pressable style={styles.centerContent} onPress={onToggle}>
          <Text
            style={[styles.textStyle, { color: colors.text }]}
            numberOfLines={1}
          >
            Tất cả sự kiện
          </Text>
          {renderIcon}
        </Pressable>
      </View>
      <View style={[styles.right, styles.centerIcon]}>
        <Pressable onPress={onHandleAddReminderClick}>
          <SVGIcon name="add" />
        </Pressable>
      </View>
    </View>
  );
};

export default memo(CountDownHeaderBar, isEqual);

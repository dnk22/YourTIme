import React, { memo, useContext, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { DIMENSIONS } from 'share/scale';
import isEqual from 'react-fast-compare';
import { ThemeContext, ThemeType } from 'resources/theme';
import { NavigationProp } from '@react-navigation/native';
import styles from './style';
import { ADD_COUNTDOWN } from 'navigation/constants';
import SVGIcon from 'components/SvgIcon';

export interface ICountDownHeaderBarProps {
  setModalVisible: () => void;
  isModalShow: boolean;
  navigation: NavigationProp<any, any>;
}

const CountDownHeaderBar = ({
  setModalVisible,
  isModalShow = false,
  navigation,
}: ICountDownHeaderBarProps) => {
  const { colors } = useContext(ThemeContext) as ThemeType;
  const renderIcon = useMemo(() => {
    return (
      <>
        {isModalShow && <SVGIcon name="arrowUp" preset="expandIcon" />}
        {!isModalShow && <SVGIcon name="arrowDown" preset="expandIcon" />}
      </>
    );
  }, [isModalShow, colors]);

  const onHandleAddReminderClick = () => {
    navigation.navigate(ADD_COUNTDOWN);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          height: DIMENSIONS.home.navbarHeight,
        },
      ]}
    >
      <View style={[styles.left, styles.centerIcon]}>
        <SVGIcon name="search" />
      </View>
      <View style={[styles.center, styles.centerIcon]}>
        <Pressable onPress={setModalVisible} style={styles.centerContent}>
          <Text
            style={[
              styles.textStyle,
              { color: colors.text, fontSize: DIMENSIONS.home.title },
            ]}
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

import React, { memo, useContext, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import SearchIcon from 'assets/svg/icon-search.svg';
import AddIcon from 'assets/svg/icon-add.svg';
import IconDown from 'assets/svg/icon-down.svg';
import IconUp from 'assets/svg/icon-up.svg';
import { DIMENSIONS, IconSize } from 'share/scale';
import isEqual from 'react-fast-compare';
import { ThemeContext, ThemeType } from 'resources/theme';
import { NavigationProp } from '@react-navigation/native';
import styles from './style';
import { ADD_COUNTDOWN } from 'navigation/constants';

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
        {isModalShow && (
          <IconUp
            width={DIMENSIONS.home.iconDropDown}
            height={DIMENSIONS.home.iconDropDown}
            color={colors.text}
          />
        )}
        {!isModalShow && (
          <IconDown
            width={DIMENSIONS.home.iconDropDown}
            height={DIMENSIONS.home.iconDropDown}
            color={colors.text}
          />
        )}
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
      <View style={[styles.centerIcon, styles.left]}>
        <Pressable onPress={onHandleAddReminderClick}>
          <AddIcon {...IconSize.app} fill={colors.text} />
        </Pressable>
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
        <SearchIcon {...IconSize.app} color={colors.text} />
      </View>
    </View>
  );
};

export default memo(CountDownHeaderBar, isEqual);

import React, { memo, useContext, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import SearchIcon from 'assets/svg/icon-search.svg';
import ViewCard from 'assets/svg/icon-view-card.svg';
import IconDown from 'assets/svg/icon-down.svg';
import IconUp from 'assets/svg/icon-up.svg';
import { DIMENSIONS } from 'share/scale';
import isEqual from 'react-fast-compare';
import styles from './style';
import { ThemeContext } from '../useContext';
import { ThemeType } from 'resources/theme';

export interface IHomeHeaderBarProps {
  setModalVisible: () => void;
  isModalShow: boolean;
}

const HomeHeaderBar = ({
  setModalVisible,
  isModalShow = false,
}: IHomeHeaderBarProps) => {
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
        <ViewCard {...DIMENSIONS.iconSize} fill={colors.text} />
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
        <SearchIcon {...DIMENSIONS.iconSize} color={colors.text} />
      </View>
    </View>
  );
};

export default memo(HomeHeaderBar, isEqual);

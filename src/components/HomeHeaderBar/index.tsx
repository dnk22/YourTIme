import React, { memo, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import SearchIcon from 'assets/svg/icon-search.svg';
import ViewCard from 'assets/svg/icon-view-card.svg';
import IconDown from 'assets/svg/icon-down.svg';
import IconUp from 'assets/svg/icon-up.svg';
import styles from './style';
import { SIZE } from 'utils/theme';
import { normalize } from 'utils/system';
import { useCustomTheme } from 'hooks';

export interface IHomeHeaderBarProps {
  setModalVisible: () => void;
  isModalShow: boolean;
}

const HomeHeaderBar = ({
  setModalVisible,
  isModalShow = false,
}: IHomeHeaderBarProps) => {
  const { colors } = useCustomTheme();
  const renderIcon = useMemo(() => {
    return (
      <>
        {isModalShow && (
          <IconUp
            width={normalize(14)}
            height={normalize(14)}
            color={colors.text}
          />
        )}
        {!isModalShow && (
          <IconDown
            width={normalize(14)}
            height={normalize(14)}
            color={colors.text}
          />
        )}
      </>
    );
  }, [isModalShow, colors]);

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={[styles.centerIcon, styles.left]}>
        <ViewCard {...SIZE.iconSize} fill={colors.text} />
      </View>
      <View style={[styles.center, styles.centerIcon]}>
        <Pressable onPress={setModalVisible} style={styles.centerContent}>
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
        <SearchIcon {...SIZE.iconSize} color={colors.text} />
      </View>
    </View>
  );
};

export default memo(HomeHeaderBar);

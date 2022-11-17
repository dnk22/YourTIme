import React, { memo, useCallback, useState, useMemo } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { RootState, useAppSelector } from 'store/index';
import { selectAllCountDownCategory } from 'store/countdown/countdown.selector';
import { FlatListComponent } from 'components/index';
import { useCustomTheme } from 'resources/theme';
import { ICountDownCategory } from '../type';
import isEqual from 'react-fast-compare';
import SVG from 'assets/svg/icon-search.svg';
import styles from './style';

interface ReminderCategoryProps {
  onPressItem?: (item: ICountDownCategory) => void;
  isCurrentCategory?: string;
  isShowCheckbox?: boolean;
  isShowOtherCategory?: boolean;
}

function CountDownCategory({
  isCurrentCategory = '',
  isShowCheckbox = false,
  isShowOtherCategory = true,
  onPressItem,
}: ReminderCategoryProps) {
  const { colors } = useCustomTheme();
  const [isSelected, setIsSelected] = useState(isCurrentCategory);
  const getAllReminderCategory = useAppSelector((state: RootState) =>
    selectAllCountDownCategory(state),
  );

  const data = useMemo(
    () =>
      isShowOtherCategory
        ? getAllReminderCategory
        : getAllReminderCategory.filter(x => x.id !== '7'),
    [getAllReminderCategory, isShowOtherCategory],
  );

  const currentSelected = useCallback(
    (itemId: string) => isSelected === itemId,
    [isSelected],
  );

  const renderItem = ({ item }: { item: ICountDownCategory }) => {
    const onPress = () => {
      setIsSelected(item.id);
      if (onPressItem) {
        onPressItem(item);
      }
    };
    return (
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor={colors.background}
        style={{ borderRadius: 10 }}
      >
        <View style={styles.item}>
          <View style={styles.itemContent}>
            <View style={styles.itemIcon}>
              <SVG color={colors.text} />
            </View>
            <Text style={[styles.title, { color: colors.text }]}>
              {item.name}
            </Text>
          </View>
          {(isShowCheckbox || currentSelected(item.id)) && (
            <View
              style={[
                styles.itemActive,
                { backgroundColor: colors.background },
              ]}
            >
              {currentSelected(item.id) && (
                <View style={styles.itemActiveBackground} />
              )}
            </View>
          )}
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.container}>
      <FlatListComponent data={data} renderItem={renderItem} />
    </View>
  );
}

export default memo(CountDownCategory, isEqual);

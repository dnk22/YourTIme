import React, { memo, useCallback, useState, useMemo } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { RootState, useAppSelector } from 'store/index';
import { FlatListComponent, SvgIcon } from 'components/index';
import { useCustomTheme } from 'resources/theme';
import { ICountDownCategory } from '../type';
import isEqual from 'react-fast-compare';
import styles from './style';
import { initCountDownCategory } from 'features/CountDown/constants';
import { countDownCategorySelectors } from 'store/countDown/countDown.selector';

interface ReminderCategoryProps {
  onPressItem?: (item: ICountDownCategory) => void;
  isCurrentCategory?: string;
  isShowCheckbox?: boolean;
  isShowOtherCategory?: boolean;
}

// not select for editing
const DONE_CATEGORY = '6';

function CountDownCategory({
  isCurrentCategory = '',
  isShowCheckbox = false,
  isShowOtherCategory = true,
  onPressItem,
}: ReminderCategoryProps) {
  const { colors } = useCustomTheme();
  const [isSelected, setIsSelected] = useState(isCurrentCategory);
  const getAllReminderCategory = useAppSelector((state: RootState) =>
    countDownCategorySelectors.selectAll(state),
  );

  const initDataWithoutDoneCategory = useMemo(
    () =>
      isShowOtherCategory
        ? initCountDownCategory
        : initCountDownCategory.filter(x => x.id !== DONE_CATEGORY),
    [getAllReminderCategory, isShowOtherCategory],
  );

  const categoryWithInitData = [
    ...initDataWithoutDoneCategory,
    ...getAllReminderCategory,
  ];

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
              <SvgIcon name={item.icon} preset="categoryIconSize" />
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
      <FlatListComponent data={categoryWithInitData} renderItem={renderItem} />
    </View>
  );
}

export default memo(CountDownCategory, isEqual);

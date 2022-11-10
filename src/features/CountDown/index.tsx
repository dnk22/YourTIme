import React, { memo, useCallback, useState } from 'react';
import { SafeAreaView, View, Pressable, Text } from 'react-native';
import { ThemeContext, useCustomTheme } from 'resources/theme';
import styles from './styles';
import CountDownHeaderBar from './CountDownHeaderBar';
import { FlatListComponent, ReminderItem } from 'components/index';
import isEqual from 'react-fast-compare';
import { NavigationProp } from '@react-navigation/native';
import { useAppSelector, RootState, useAppDispatch } from 'store/index';
import { selectAllReminder } from 'store/reminder/reminder.selector';
import { clearAllReminder } from 'store/reminder/reminder.slice';
import { TReminder } from './type';
import CountDownCategory from './CountDownCategory';
import ExpandViewAnimated from 'resources/animations/ExpandViewAnimated';

export interface ICountDownProps {
  navigation: NavigationProp<any, any>;
}

const CountDown = ({ navigation }: ICountDownProps) => {
  const { colors } = useCustomTheme();
  const [isShowCategory, setIsShowCategory] = useState(false);

  const dispatch = useAppDispatch();
  const getAllReminder = useAppSelector((state: RootState) =>
    selectAllReminder(state),
  );
  const renderItem = useCallback(
    ({ item, index }: { item: TReminder; index: number }) => (
      <ReminderItem item={item} isPin={index === 0} />
    ),
    [],
  );

  const toggleReminderCategory = (): void => {
    setIsShowCategory(!isShowCategory);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.surface }]}
    >
      <ThemeContext.Provider value={{ colors }}>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <CountDownHeaderBar
            setModalVisible={toggleReminderCategory}
            isModalShow={isShowCategory}
            navigation={navigation}
          />
          {isShowCategory && (
            <ExpandViewAnimated
              onToggle={toggleReminderCategory}
              colors={colors}
            >
              <CountDownCategory />
            </ExpandViewAnimated>
          )}
          <Pressable
            style={{ alignItems: 'center', marginTop: 5 }}
            onPress={() => dispatch(clearAllReminder())}
          >
            <Text>clear all</Text>
          </Pressable>
          <View style={[styles.contentView]}>
            <FlatListComponent
              data={getAllReminder}
              renderItem={renderItem}
              maxToRenderPerBatch={5}
              initialNumToRender={5}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};

export default memo(CountDown, isEqual);

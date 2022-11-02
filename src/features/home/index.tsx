import React, { memo, useCallback, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { useCustomTheme } from 'resources/theme';
import HomeHeaderBar from './HomeHeaderBar';
import ListCategory from './ListCategory';
import ReminderItem from 'components/ReminderItem';
import styles from './styles';
import isEqual from 'react-fast-compare';
import { DATA } from './data';
import { TReminder } from 'utils/types';
import { ThemeContext } from './useContext';

const Home = ({ navigation }) => {
  const [isShowCategory, setIsShowCategory] = useState(false);
  const { colors } = useCustomTheme();

  const renderItem = useCallback(
    ({ item }: { item: TReminder }) => <ReminderItem item={item} />,
    [],
  );
  const keyExtractor = useCallback((item: TReminder) => item.id.toString(), []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.surface }]}
    >
      <ThemeContext.Provider value={{ colors }}>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <HomeHeaderBar
            setModalVisible={() => setIsShowCategory(!isShowCategory)}
            isModalShow={isShowCategory}
          />
          {isShowCategory && (
            <ListCategory
              isShow={isShowCategory}
              setShowHide={setIsShowCategory}
            />
          )}
          <View style={[styles.contentView]}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
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

export default memo(Home, isEqual);

import React, { memo, useCallback, useRef } from 'react';
import { SafeAreaView, View, Pressable, Text } from 'react-native';
import { ThemeContext, useCustomTheme } from 'resources/theme';
import { NavigationProp } from '@react-navigation/native';
import isEqual from 'react-fast-compare';
import styles from './styles';
import { TCountDown } from './type';
import { FlatListComponent } from 'components/index';
import CountDownHeaderBar from './CountDownHeaderBar';
import { clearAllCountDown } from 'store/countDown/countDown.slice';
import { countDownSelectors } from 'store/countDown/countDown.selector';
import { useAppSelector, RootState, useAppDispatch } from 'store/index';
import CountDownItem from './CountDownItem';
import { DynamicIsland } from 'resources/animations';
import CountDownCategory from './CountDownCategory';

export interface ICountDownProps {
  navigation: NavigationProp<any, any>;
}

const CountDown = ({ navigation }: ICountDownProps) => {
  const { colors } = useCustomTheme();
  const dynamicIsland = useRef<any>(null);
  const dispatch = useAppDispatch();
  const getAllCountDown = useAppSelector((state: RootState) =>
    countDownSelectors.selectAll(state),
  );

  const renderItem = useCallback(
    ({ item, index }: { item: TCountDown; index: number }) => (
      <CountDownItem item={item} isPin={index === 0} />
    ),
    [],
  );

  const onToggle = () => {
    dynamicIsland.current.onToggle();
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.surface }]}
    >
      <ThemeContext.Provider value={{ colors }}>
        <DynamicIsland ref={dynamicIsland}>
          <CountDownCategory />
        </DynamicIsland>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <CountDownHeaderBar navigation={navigation} onToggle={onToggle} />
          <Pressable
            style={{ alignItems: 'center', marginTop: 5 }}
            onPress={() => dispatch(clearAllCountDown())}
          >
            <Text>clear all</Text>
          </Pressable>
          <View style={[styles.contentView]}>
            <FlatListComponent
              data={getAllCountDown}
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

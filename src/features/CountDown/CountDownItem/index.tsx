import React, { memo, useMemo, useRef, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Alert, GestureResponderEvent } from 'react-native';
import Pin from 'assets/svg/pin.svg';
import styles from './styles';
import { TCountDown } from '../type';
import { useCustomTheme } from 'resources/theme';
import { useNavigation } from '@react-navigation/native';
import { COUNTDOWN_DETAILS } from 'navigation/constants';
import { IMenuItemsProps } from 'components/ContextMenu';
import {
  PressableHaptic,
  ContextMenu,
  SwipeableComponent,
} from 'components/index';
import CountDownDetails from 'features/CountDown/CountDownDetails';
import DetailsView from './DetailsView';
import PinCountDown from './CountDown/PinCountDown';
import NormalCountDown from './CountDown/NormalCountDown';
import Title from './Title';
import { useAppDispatch } from 'store/index';
import { deleteCountDownById } from 'store/countDown/countDown.slice';
import Animated, { StretchInY, StretchOutY } from 'react-native-reanimated';

type ICountDownItemProps = {
  item: TCountDown;
  isPin: boolean;
};

function CountDownItem({ item, isPin }: ICountDownItemProps) {
  const { name, targetDateTime, id } = item;
  const { colors } = useCustomTheme();
  const { navigate } = useNavigation();
  const initCoordinates = useRef(0);
  const dispatch = useAppDispatch();

  const menuItems: IMenuItemsProps = [
    {
      actionKey: 'select',
      actionTitle: 'Chọn một',
      icon: {
        type: 'IMAGE_SYSTEM',
        imageValue: {
          systemName: 'checkmark.circle',
        },
      },
    },
    {
      actionKey: 'selectAll',
      actionTitle: 'Chọn tất cả',
      icon: {
        type: 'IMAGE_SYSTEM',
        imageValue: {
          systemName: 'checkmark.circle.fill',
        },
      },
    },
  ];

  const renderPin = useMemo(() => {
    return isPin && <Pin style={styles.pin} width={24} height={24} />;
  }, [isPin]);

  const renderPreview = useMemo(() => <CountDownDetails id={id} />, [id]);

  const onHandleMenuItemPress = ({ nativeEvent }: { nativeEvent: any }) => {
    switch (nativeEvent.actionKey) {
      case 'select':
        Alert.alert('saving...');
        break;
      case 'selectAll':
        Alert.alert('liking...');
        break;
    }
  };

  const onHandleNavigateToDetailsScreen = () => {
    navigate(COUNTDOWN_DETAILS, { countDownId: item.id });
  };

  const onHandleItemPressIn = useCallback((e: GestureResponderEvent) => {
    initCoordinates.current = e.nativeEvent.locationX;
  }, []);

  const onHandleItemPressOut = useCallback((e: GestureResponderEvent) => {
    if (e.nativeEvent.locationX === initCoordinates.current) {
      onHandleNavigateToDetailsScreen();
    }
  }, []);

  const onHandleSwipeDelete = () => {
    dispatch(deleteCountDownById(id));
  };

  return (
    <Animated.View exiting={StretchOutY.duration(200)} entering={StretchInY}>
      <ContextMenu
        style={[styles.contextMenu]}
        menuItems={menuItems}
        menuVisible={true}
        mountPreview={true}
        previewConfig={{
          previewType: 'CUSTOM',
          previewSize: 'STRETCH',
          backgroundColor: colors.background,
          preferredCommitStyle: 'pop',
        }}
        onPressMenuItem={onHandleMenuItemPress}
        renderPreview={() => renderPreview}
        onPressMenuPreview={onHandleNavigateToDetailsScreen}
      >
        <SwipeableComponent onSwipeableOpen={onHandleSwipeDelete}>
          <PressableHaptic
            style={[
              styles.container,
              { backgroundColor: colors.surface },
              isPin && styles.styleOfPinItem,
            ]}
            delayLongPress={100} // Leave room for a user to be able to click
            onLongPress={() => (initCoordinates.current = 0)} // A callback that does nothing
            onPressIn={onHandleItemPressIn}
            onPressOut={onHandleItemPressOut}
          >
            {renderPin}
            <Title colors={colors} title={name} />
            {isPin && (
              <PinCountDown colors={colors} targetDateTime={targetDateTime} />
            )}
            <DetailsView
              isPin={isPin}
              colors={colors}
              targetDateTime={targetDateTime}
            />
            {!isPin && (
              <NormalCountDown
                colors={colors}
                targetDateTime={targetDateTime}
              />
            )}
          </PressableHaptic>
        </SwipeableComponent>
      </ContextMenu>
    </Animated.View>
  );
}

export default memo(CountDownItem, isEqual);

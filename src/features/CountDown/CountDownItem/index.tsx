import React, { memo, useContext } from 'react';
import isEqual from 'react-fast-compare';
import { StyleProp } from 'react-native';
import Pin from 'assets/svg/pin.svg';
import styles from './styles';
import { normalize } from 'share/scale';
import { TReminder } from '../type';
import Title from './Title';
import DetailsView from './DetailsView';
import { ThemeContext, ThemeType } from 'resources/theme';
import PinCountDown from './CountDown/PinCountDown';
import NormalCountDown from './CountDown/NormalCountDown';
import PressableHaptic from 'components/PressableHaptic';
import { useNavigation } from '@react-navigation/native';
import { COUNTDOWN_DETAILS } from 'navigation/constants';

type ICountDownItemProps = {
  item: TReminder;
  isPin: boolean;
};

const styleOfPinItem: StyleProp<any> = {
  alignItems: 'center',
};

function renderPin() {
  return (
    <Pin style={styles.pin} width={normalize(24)} height={normalize(24)} />
  );
}

function CountDownItem({ item, isPin }: ICountDownItemProps) {
  const { name, targetDateTime, repeat } = item;
  const { colors } = useContext(ThemeContext) as ThemeType;
  const { navigate } = useNavigation();

  const onHandleCountDownItemPress = () => {
    navigate(COUNTDOWN_DETAILS, { countDownId: item.id });
  };

  return (
    <PressableHaptic
      style={[
        styles.container,
        { backgroundColor: colors.surface },
        isPin && styleOfPinItem,
      ]}
      onPress={onHandleCountDownItemPress}
    >
      {isPin && renderPin()}
      <Title colors={colors} title={name} />
      {isPin && (
        <PinCountDown colors={colors} targetDateTime={targetDateTime} />
      )}
      <DetailsView
        isPin={isPin}
        colors={colors}
        repeat={repeat}
        targetDateTime={targetDateTime}
      />
      {!isPin && (
        <NormalCountDown colors={colors} targetDateTime={targetDateTime} />
      )}
    </PressableHaptic>
  );
}
export default memo(CountDownItem, isEqual);

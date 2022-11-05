import React, { memo, useContext } from 'react';
import isEqual from 'react-fast-compare';
import { StyleProp, View } from 'react-native';
import { TReminder } from 'utils/types';
import Pin from 'assets/svg/pin.svg';
import styles from './styles';
import { normalize } from 'share/scale';
import Title from './Title';
import DetailsView from './DetailsView';
import { ThemeContext } from 'features/home/useContext';
import { ThemeType } from 'resources/theme';
import PinCountDown from './CountDown/PinCountDown';
import NormalCountDown from './CountDown/NormalCountDown';
import { addSeconds } from 'date-fns';

type IReminderItemProps = {
  item: TReminder;
};

const styleOfPinItem: StyleProp<any> = {
  alignItems: 'center',
};

function renderPin() {
  return (
    <Pin style={styles.pin} width={normalize(24)} height={normalize(24)} />
  );
}

function ReminderItem({ item }: IReminderItemProps) {
  const { name, isPin, targetDate, repeat } = item;
  const { colors } = useContext(ThemeContext) as ThemeType;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface },
        isPin && styleOfPinItem,
      ]}
    >
      {isPin && renderPin()}
      <Title colors={colors} title={name} />
      {isPin && <PinCountDown colors={colors} targetDate={targetDate} />}
      <DetailsView
        isPin={isPin}
        colors={colors}
        repeat={repeat}
        targetDate={targetDate}
      />
      {!isPin && <NormalCountDown colors={colors} targetDate={targetDate} />}
    </View>
  );
}
export default memo(ReminderItem, isEqual);

import React, { memo, useContext } from 'react';
import isEqual from 'react-fast-compare';
import { StyleProp, View } from 'react-native';
import { TReminder } from 'utils/types';
import Pin from 'assets/svg/pin.svg';
import styles from './styles';
import { normalize } from 'share/scale';
import Title from './Title';
import DetailsView from './DetailsView';
import { ThemeContext, ThemeType } from 'resources/theme';
import PinCountDown from './CountDown/PinCountDown';
import NormalCountDown from './CountDown/NormalCountDown';

type IReminderItemProps = {
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

function ReminderItem({ item, isPin }: IReminderItemProps) {
  const { name, targetDateTime, repeat } = item;
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
    </View>
  );
}
export default memo(ReminderItem, isEqual);

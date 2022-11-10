import React, { memo } from 'react';
import { Text, View } from 'react-native';
import isEqual from 'react-fast-compare';
import { formatDateLocal } from 'utils/date';
import { REPEAT_DATA } from 'features/CountDown/constants';
import styles from './styles';

function DetailsView({
  colors,
  targetDateTime,
  repeat,
  isPin,
}: {
  colors: any;
  targetDateTime: Date;
  repeat: string;
  isPin: boolean;
}) {
  const dividerWidth = 0.3;
  return (
    <View
      style={[styles.detailsView, { borderTopWidth: isPin ? dividerWidth : 0 }]}
    >
      <Text style={[{ color: colors.text }, styles.fontSizeDetails]}>
        {formatDateLocal(targetDateTime, 'eeee, dd/MM/yyyy')}
      </Text>
      <Text style={[{ color: colors.text }, styles.divider]}>|</Text>
      <Text style={[{ color: colors.text }, styles.fontSizeDetails]}>
        {REPEAT_DATA[repeat]}
      </Text>
    </View>
  );
}

export default memo(DetailsView, isEqual);

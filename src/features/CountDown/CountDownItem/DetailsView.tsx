import React, { memo, useMemo } from 'react';
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
  targetDateTime: Date | string | number;
  repeat?: string;
  isPin?: boolean;
}) {
  const DIVIDER_WIDTH = 0.3;
  const repeatDisplay = useMemo(
    () => REPEAT_DATA[repeat] ?? 'Không lặp lại',
    [repeat],
  );
  const showDivider = useMemo(() => (isPin ? DIVIDER_WIDTH : 0), [isPin]);

  return (
    <View style={[styles.detailsView, { borderTopWidth: showDivider }]}>
      <Text style={[{ color: colors.text }, styles.fontSizeDetails]}>
        {formatDateLocal(targetDateTime, 'eeee, dd/MM/yyyy')}
      </Text>
      <Text style={[{ color: colors.text }, styles.divider]}>|</Text>
      <Text style={[{ color: colors.text }, styles.fontSizeDetails]}>
        {repeatDisplay}
      </Text>
    </View>
  );
}

export default memo(DetailsView, isEqual);

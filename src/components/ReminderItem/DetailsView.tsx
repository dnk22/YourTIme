import React, { memo } from 'react';
import { Text, View } from 'react-native';
import isEqual from 'react-fast-compare';
import { formatDateLocal } from 'utils/date';
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
  return (
    <View style={[styles.detailsView, { borderTopWidth: isPin ? 0.3 : 0 }]}>
      <Text style={[{ color: colors.text }, styles.fontSizeDetails]}>
        {formatDateLocal(targetDateTime, 'eeee, dd/MM/yyyy')}
      </Text>
      <Text style={[{ color: colors.text }, styles.divider]}>|</Text>
      <Text style={[{ color: colors.text }, styles.fontSizeDetails]}>
        {repeat}
      </Text>
    </View>
  );
}

export default memo(DetailsView, isEqual);

import React, { memo } from 'react';
import { Text } from 'react-native';
import isEqual from 'react-fast-compare';
import styles from './styles';

function Title({ colors, title }: { colors: any; title: string }) {
  return (
    <Text style={[{ color: colors.text }, styles.reminderName]}>{title}</Text>
  );
}

export default memo(Title, isEqual);

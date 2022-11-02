import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, Text, View } from 'react-native';

function NormalCountDown({
  colors,
  targetDate,
}: {
  colors: any;
  targetDate: Date;
}) {
  return (
    <View style={styles.countdownView}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  countdownView: {
    backgroundColor: 'blue',
  },
});

export default memo(NormalCountDown, isEqual);

import React, { memo, useCallback, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, Text, View } from 'react-native';
import { useCountTime } from 'share/hook.custom';
import { normalize } from 'share/scale';

type TItem = {
  item: any;
  colors: any;
};

function NormalCountDown({
  colors,
  targetDate,
}: {
  colors: any;
  targetDate: Date;
}) {
  const timerRemaining = useCountTime(targetDate);

  return (
    <View style={styles.countdownView}>
      {!timerRemaining.isPassed &&
        Object.entries(timerRemaining).map(item => {
          const [key] = item;
          return <RenderItem item={item} colors={colors} key={key} />;
        })}
      <Text>{timerRemaining.value}</Text>
    </View>
  );
}

const RenderItem = memo(function ({ item, colors }: TItem) {
  const [key, value] = item;
  const isBigNumber = value > 1;

  // for cache key display
  const typeKey = useMemo(
    () => (value > 1 ? key : key.substring(0, key.length - 1)),
    [isBigNumber],
  );

  // for cache value display
  const zeroPad = useCallback(
    (num: string, places = 2) => String(num).padStart(places, '0'),
    [],
  );
  return (
    <View style={styles.itemCountDetail} key={key}>
      {/* <ImageBackground source={require('assets/images/bg-timer.png')}> */}
      <Text style={[styles.itemCountValue, { color: colors.text }]}>
        {zeroPad(value)}
      </Text>
      {/* </ImageBackground> */}
      <Text style={{ color: colors.text }}>{key}</Text>
    </View>
  );
}, isEqual);

const styles = StyleSheet.create({
  countdownView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  itemCountDetail: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemCountValue: {
    marginRight: 3,
    fontSize: normalize(14),
  },
});

export default memo(NormalCountDown, isEqual);

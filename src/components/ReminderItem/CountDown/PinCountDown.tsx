import React, { memo, useCallback, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { Text, View } from 'react-native';
import styles from '../styles';
import { useCountTime } from 'share/hook.custom';

type TItem = {
  item: any;
  colors: any;
};

function PinCountDown({
  colors,
  targetDate,
}: {
  colors: any;
  targetDate: Date;
}) {
  const timerRemaining = useCountTime(targetDate);
  return (
    <View style={styles.countdownView}>
      {Object.entries(timerRemaining).map(item => {
        const [key] = item;
        return <RenderItem item={item} colors={colors} key={key} />;
      })}
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

export default memo(PinCountDown, isEqual);

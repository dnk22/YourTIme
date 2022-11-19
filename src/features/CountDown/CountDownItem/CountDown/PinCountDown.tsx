import React, { memo, useCallback, useState, useMemo } from 'react';
import { Text, View } from 'react-native';
import isEqual from 'react-fast-compare';
import { getCountDownBetweenDate, getFormatDistanceToNow } from 'utils/date';
import { useInterval } from 'share/hook.custom';
import { pinStyles as styles } from './style';
import { TCountDownProps, TItemProps } from './type';

const secondInterval = 1000;
function PinCountDown({ colors, targetDateTime }: TCountDownProps) {
  // set time count
  const [timeRemaining, setTimeRemaining] = useState<Object | string>(
    getCountDownBetweenDate(targetDateTime),
  );

  // result of countdown in future will be return a object
  const futureMode = useMemo(
    () => typeof timeRemaining === 'object',
    [timeRemaining],
  );

  const setPassTime = () => {
    const time = getFormatDistanceToNow(targetDateTime);
    setTimeRemaining(time);
  };

  // action for future time
  useInterval(
    () => {
      const time = getCountDownBetweenDate(targetDateTime);
      if (!time) {
        setPassTime();
        return;
      }
      setTimeRemaining(time);
    },
    futureMode ? secondInterval : null,
  );

  return (
    <View style={styles.countdownView}>
      {futureMode ? (
        Object.entries(timeRemaining).map(item => {
          const [key] = item;
          return <RenderItem item={item} colors={colors} key={key} />;
        })
      ) : (
        <Text style={[styles.textState, { color: colors.text }]}>
          Đã kết thúc
        </Text>
      )}
    </View>
  );
}

const RenderItem = memo(function ({ item, colors }: TItemProps) {
  const [key, value] = item;
  // const isBigNumber = value > 1;

  // for cache key display
  // const typeKey = useMemo(
  //   () => (value > 1 ? key : key.substring(0, key.length - 1)),
  //   [isBigNumber],
  // );

  // for cache value display
  const zeroPad = useCallback(
    (num: string, places = 2) => String(num).padStart(places, '0'),
    [],
  );
  return (
    <View style={styles.itemCount} key={key}>
      <Text style={[styles.itemCountValue, { color: colors.text }]}>
        {zeroPad(value)}
      </Text>
      <Text style={{ color: colors.text }}>{key}</Text>
    </View>
  );
}, isEqual);

export default memo(PinCountDown, isEqual);

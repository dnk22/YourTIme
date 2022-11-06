import { compareAsc } from 'date-fns';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, Text, View } from 'react-native';
import { useInterval } from 'share/hook.custom';
import { normalize } from 'share/scale';
import { getCountDownBetweenDate, getFormatDistanceToNow } from 'utils/date';

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
  // set time count
  const futureInterval = 1000;
  const passedInterVal = 60000;
  const [timeRemaining, setTimeRemaining] = useState<any>('');
  const [isCountType, setIsCountType] = useState<string>('');

  const getCountType = useCallback(() => {
    const result = compareAsc(new Date(), new Date(targetDate));
    switch (result) {
      case -1:
        return 'future';
      case 1:
        setTimeRemaining(getFormatDistanceToNow(targetDate));
        return 'passed';
      default:
        return 'now';
    }
  }, [targetDate]);

  useEffect(() => {
    setIsCountType(getCountType);
  }, []);

  useInterval(
    () => {
      const time = getCountDownBetweenDate(targetDate);
      if (!time) {
        setTimeRemaining(true);
        setIsCountType('passed');
        return;
      }
      setTimeRemaining(time);
    },
    isCountType === 'future' ? futureInterval : null,
  );

  useInterval(
    () => {
      const time = getFormatDistanceToNow(targetDate);
      setTimeRemaining(time);
    },
    isCountType === 'passed' ? passedInterVal : null,
  );

  return (
    <View style={styles.countdownView}>
      {isCountType === 'future' ? (
        Object.entries(timeRemaining).map(item => {
          const [key] = item;
          return <RenderItem item={item} colors={colors} key={key} />;
        })
      ) : isCountType === 'now' ? (
        <Text style={[styles.itemCountValue, { color: colors.text }]}>
          Đang diễn ra
        </Text>
      ) : (
        <Text style={[styles.itemCountValue, { color: colors.text }]}>
          Đã kết thúc {timeRemaining}
        </Text>
      )}
      {!timeRemaining && (
        <Text style={[styles.itemCountValue, { color: colors.text }]}>
          Loading
        </Text>
      )}
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

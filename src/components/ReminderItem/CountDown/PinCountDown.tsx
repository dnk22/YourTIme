import React, { memo, useCallback, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import isEqual from 'react-fast-compare';
import { getCountDownBetweenDate, getFormatDistanceToNow } from 'utils/date';
import { useInterval } from 'share/hook.custom';
import { compareAsc } from 'date-fns';
import styles from '../styles';

type TItemProps = {
  item: any;
  colors: any;
};

interface TPinCountDownProps {
  colors: any;
  targetDateTime: Date;
}

function PinCountDown({ colors, targetDateTime }: TPinCountDownProps) {
  // set time count
  const futureInterval = 1000;
  const passedInterVal = 60000;
  const [timeRemaining, setTimeRemaining] = useState<any>('');
  const [isCountType, setIsCountType] = useState<string>('');

  const getCountType = useCallback(() => {
    const result = compareAsc(new Date(), new Date(targetDateTime));
    switch (result) {
      case -1:
        return 'future';
      case 1:
        return 'passed';
      default:
        return 'now';
    }
  }, [targetDateTime]);

  useEffect(() => {
    setIsCountType(getCountType);
  }, []);

  useInterval(
    () => {
      const time = getCountDownBetweenDate(targetDateTime);
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
      const time = getFormatDistanceToNow(targetDateTime);
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
    <View style={styles.itemCountDetail} key={key}>
      <Text style={[styles.itemCountValue, { color: colors.text }]}>
        {zeroPad(value)}
      </Text>
      <Text style={{ color: colors.text }}>{key}</Text>
    </View>
  );
}, isEqual);

export default memo(PinCountDown, isEqual);

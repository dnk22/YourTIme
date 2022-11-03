import { differenceInMilliseconds } from 'date-fns';
import { useEffect, useRef } from 'react';
import { getFormatDistanceToNow, getCountDownBetweenDate } from 'utils/date';

const useCountTime = (targetDate: Date | number) => {
  const diffInMilliSeconds = differenceInMilliseconds(
    new Date(targetDate),
    new Date(),
  );
  /**
   * timeInSeconds > 0 : return object countdown
   * timeInSeconds > < : return string about pass time
   */
  if (!diffInMilliSeconds) {
    return { isPassed: true, value: getFormatDistanceToNow(targetDate) };
  } else {
    return getCountDownBetweenDate(diffInMilliSeconds);
  }
};

function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export { useCountTime, useInterval };

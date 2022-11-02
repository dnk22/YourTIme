import { useEffect, useState } from 'react';

const ONE_DAY = 60 * 60 * 24;
const ONE_HOUR = 60 * 60;
const ONE_MINUTE = 60;

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  if (countDown <= 1) {
    return {
      ngày: 0,
      giờ: 0,
      phút: 0,
      giây: 0,
    };
  }
  const days = Math.floor(countDown / (1000 * ONE_DAY));
  const hours = Math.floor((countDown % (1000 * ONE_DAY)) / (1000 * ONE_HOUR));
  const minutes = Math.floor(
    (countDown % (1000 * ONE_HOUR)) / (1000 * ONE_MINUTE),
  );
  const seconds = Math.floor((countDown % (1000 * ONE_MINUTE)) / 1000);

  return { ngày: days, giờ: hours, phút: minutes, giây: seconds };
};

export { useCountdown };

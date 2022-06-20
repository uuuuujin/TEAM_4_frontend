import { useRef, useEffect } from 'react';

import { PomodoroTimerTypes } from '../store/modules/timer/timer.type';

interface UseTimerIntervalCallback {
  (limit: number): boolean;
}

export const getPomoLimitCount = (type: PomodoroTimerTypes) =>
  ({
    [PomodoroTimerTypes.stop]: 0,
    [PomodoroTimerTypes.long_pomo]: 3000,
    [PomodoroTimerTypes.short_pomo]: 1500,
    [PomodoroTimerTypes.long_break]: 600,
    [PomodoroTimerTypes.short_break]: 300,
  }[type]);

export default function useTimerInterval(callback: UseTimerIntervalCallback, type: PomodoroTimerTypes) {
  const savedCallback = useRef<UseTimerIntervalCallback>(() => false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const timer = setInterval(() => {
      const isFullCount = savedCallback.current(getPomoLimitCount(type));
      if (isFullCount) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [type]);
}

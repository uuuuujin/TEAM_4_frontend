import React, { useState, useEffect } from 'react';

import { start } from 'repl';
import { PomodoroTimerContainer, TimerText, TimerTextContainer, TimerColon } from './pomodoro-timer.style';

import useTimerInterval, { getPomoLimitCount } from '../../hooks/useTimerInterval.hook';
import {
  selectPomodoroTimerType,
  selectTimerStart,
  selectTimerCycle,
  selectTimerMode,
} from '../../store/modules/timer/timer.select';
import { timerAction } from '../../store/modules/timer/timer.slice';
import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { PomodoroTimerTypes } from '../../store/modules/timer/timer.type';

const formatCount = (timerCount: number): number[] => [
  Math.floor(timerCount / 60 / 10),
  Math.floor(timerCount / 60) % 10,
  Math.floor((timerCount % 60) / 10),
  timerCount % 10,
];

const calNextPomoType = (currentPomoType: PomodoroTimerTypes) => {
  if (currentPomoType === PomodoroTimerTypes.short_pomo) {
    return PomodoroTimerTypes.short_break;
  }
  if (currentPomoType === PomodoroTimerTypes.short_break) {
    return PomodoroTimerTypes.short_pomo;
  }
  if (currentPomoType === PomodoroTimerTypes.long_pomo) {
    return PomodoroTimerTypes.long_break;
  }
  if (currentPomoType === PomodoroTimerTypes.long_break) {
    return PomodoroTimerTypes.long_pomo;
  }
  return PomodoroTimerTypes.short_pomo;
};
type Props = {
  time?: number;
};
export default function PomodoroTimer({ time }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const pomoType = useAppSelector(selectPomodoroTimerType);
  const pomoStart = useAppSelector(selectTimerStart);
  const pomoCycle = useAppSelector(selectTimerCycle);
  const pomoMode = useAppSelector(selectTimerMode);
  const [count, setCount] = useState(0);

  const intervalCallback = () => {
    if (count === 0) {
      if (pomoCycle === 4) {
        dispatch(timerAction.finishTimer());
      } else if (pomoMode === 'multi') {
        dispatch(timerAction.changeMultiTimer());
      } else {
        const pomo = calNextPomoType(pomoType);
        let cycle: number = pomoCycle;
        if (pomoType === PomodoroTimerTypes.short_break || pomoType === PomodoroTimerTypes.long_break) {
          cycle += 1;
        }

        dispatch(
          timerAction.updateTimerTypes({
            pomo,
            cycle,
          })
        );
      }
      return true;
    }
    if (pomoStart) {
      setCount(count - 1);
    }
    return false;
  };

  useEffect(() => {
    setCount(getPomoLimitCount(pomoType));
  }, [pomoType]);

  useTimerInterval(intervalCallback, pomoType);

  const timerDigits: number[] = time ? formatCount(time) : formatCount(count);

  return (
    <PomodoroTimerContainer>
      <TimerTextContainer>
        <TimerText>{timerDigits[0]}</TimerText>
        <TimerText>{timerDigits[1]}</TimerText>
        <TimerColon>:</TimerColon>
        <TimerText>{timerDigits[2]}</TimerText>
        <TimerText>{timerDigits[3]}</TimerText>
      </TimerTextContainer>
    </PomodoroTimerContainer>
  );
}

import React, { useState } from 'react';

import { PomodoroTimerContainer, TimerText, TimerTextContainer, TimerColon } from './pomodoro-timer.style';

import useTimerInterval from '../../hooks/useTimerInterval.hook';
import { selectPomodoroTimerType } from '../../store/modules/timer/timer.select';
import { useAppSelector } from '../../hooks/index.hook';

const formatCount = (timerCount: number): number[] => [
  Math.floor(timerCount / 60 / 10),
  Math.floor(timerCount / 60) % 10,
  Math.floor((timerCount % 60) / 10),
  timerCount % 10,
];

export default function PomodoroTimer(): JSX.Element {
  const [count, setCount] = useState(0);
  const pomoType = useAppSelector(selectPomodoroTimerType);

  const intervalCallback = (limit: number) => {
    if (count === limit) {
      setCount(0);
      return true;
    }
    setCount(count + 1);
    return false;
  };

  useTimerInterval(intervalCallback, pomoType);

  const timerDigits: number[] = formatCount(count);

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

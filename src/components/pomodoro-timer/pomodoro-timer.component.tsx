import React, { useState } from 'react';

import { PomodoroTimerContainer, TimerText, TimerTextContainer, TimerColon } from './pomodoro-timer.style';

import useTimerInterval from '../../hooks/useTimerInterval.hook';

export enum PomodoroTimerTypes {
  long_pomo = 'long_pomo',
  short_pomo = 'short_pomo',
  long_break = 'long_break',
  short_break = 'short_break',
}

// const getNextPomodoroType = (currentType: PomodoroTimerTypes) => {};

const formatCount = (timerCount: number): number[] => [
  Math.floor(timerCount / 60 / 10),
  Math.floor(timerCount / 60) % 10,
  Math.floor((timerCount % 60) / 10),
  timerCount % 10,
];

export default function PomodoroTimer(): JSX.Element {
  const [count, setCount] = useState(0);
  const [pomoType, setPomoType] = useState<PomodoroTimerTypes>(PomodoroTimerTypes.short_pomo);

  const intervalCallback = (limit: number) => {
    if (count === limit) {
      // 타입 변경
      setCount(0);
      // 다음 타입 설정
      setPomoType(PomodoroTimerTypes.short_break);
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

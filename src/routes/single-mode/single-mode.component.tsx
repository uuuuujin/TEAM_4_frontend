import React, { useState, useEffect, useMemo } from 'react';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import Character from '../../components/character/character.component';
import StateBar from '../../components/state-bar/state-bar.component';
import { Container, StateBarContainer, CharacterContainer, TimerContainer } from './single-mode.style';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectNickname, selectCharacterImgCode, selectTriangleImgCode } from '../../store/modules/main/main.select';
import { selectPomodoroTimerType, selectTimerCycle } from '../../store/modules/timer/timer.select';

import useRandomCharacter from '../../hooks/useRandomCharacter';

import CheckPomoCycle from '../../components/pomo-counting/pomo-counting.component';

export default function SingleMode(): JSX.Element {
  useRandomCharacter();

  const nickName = useAppSelector(selectNickname);
  const imgCodeAll = useAppSelector(selectCharacterImgCode);
  const pomoTimerType = useAppSelector(selectPomodoroTimerType);

  const [characterMoving, setCharacterMoving] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCharacterMoving((v) => !v), 500);
    return () => clearInterval(timer);
  }, []);

  const stateMessage = () => {
    if (pomoTimerType === 'break') {
      return '5분 휴식합니다.';
    }
    if (pomoTimerType === 'long_break') {
      return '10분 휴식합니다.';
    }
    return '내 새끼 밥주는 중...';
  };

  const characterState = () => {
    if (pomoTimerType === 'break' || pomoTimerType === 'long_break') {
      if (characterMoving) return `${process.env.REACT_APP_IMG_URL}/character/all/rest/0${imgCodeAll}_01.png`;
      return `${process.env.REACT_APP_IMG_URL}/character/all/rest/0${imgCodeAll}_02.png`;
    }

    if (characterMoving) return `${process.env.REACT_APP_IMG_URL}/character/all/work/0${imgCodeAll}_01.png`;
    return `${process.env.REACT_APP_IMG_URL}/character/all/work/0${imgCodeAll}_02.png`;
  };

  return (
    <Container pomoState={pomoTimerType}>
      <div>
        <TimerContainer>
          <PomodoroTimer />
          <CheckPomoCycle />
        </TimerContainer>
        <CharacterContainer>
          <Character nickname={nickName} characterImgSrc={characterState()} />
        </CharacterContainer>
      </div>

      <StateBarContainer>
        <StateBar>{stateMessage()}</StateBar>
      </StateBarContainer>
    </Container>
  );
}

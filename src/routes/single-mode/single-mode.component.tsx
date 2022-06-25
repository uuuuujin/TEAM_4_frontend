import React, { useState, useEffect, useMemo } from 'react';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import Character from '../../components/character/character.component';
import StateBar from '../../components/state-bar/state-bar.component';
import {
  Container,
  StateBarContainer,
  CharacterContainer,
  TimerContainer,
  PomoCheckImage,
  PomoCheckContainer,
} from './single-mode.style';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectNickname, selectCharacterImgCode, selectTriangleImgCode } from '../../store/modules/main/main.select';
import { selectPomodoroTimerType, selectTimerCycle } from '../../store/modules/timer/timer.select';

import useRandomCharacter from '../../hooks/useRandomCharacter';

export default function SingleMode(): JSX.Element {
  useRandomCharacter();

  const nickName = useAppSelector(selectNickname);
  const imgCodeAll = useAppSelector(selectCharacterImgCode);
  const triangleImgCode = useAppSelector(selectTriangleImgCode);
  const [characterMoving, setCharacterMoving] = useState(false);

  const cycleCount = useAppSelector(selectTimerCycle);
  const pomoTimerType = useAppSelector(selectPomodoroTimerType);

  useEffect(() => {
    const timer = setInterval(() => setCharacterMoving((v) => !v), 500);
    return () => clearInterval(timer);
  }, []);

  const offArray = useMemo(() => [...Array(4 - cycleCount)], [cycleCount]);
  const progressArray = useMemo(() => [...Array(cycleCount)], [cycleCount]);

  const pomoCheck = () => {
    return (
      <PomoCheckContainer>
        {progressArray.map(() => (
          <PomoCheckImage src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_on.png`} alt="pomo_check_on" />
        ))}
        {offArray.map(() => (
          <PomoCheckImage src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_off.png`} alt="pomo_check_off" />
        ))}
      </PomoCheckContainer>
    );
  };

  return (
    <Container pomoState={pomoTimerType}>
      <div>
        <TimerContainer>
          <PomodoroTimer />
          {pomoCheck()}
        </TimerContainer>
        <CharacterContainer>
          <Character
            nickname={nickName}
            characterImgSrc={
              characterMoving
                ? `${process.env.REACT_APP_IMG_URL}/character/all/work/0${imgCodeAll}_01.png`
                : `${process.env.REACT_APP_IMG_URL}/character/all/work/0${imgCodeAll}_02.png`
            }
            triangleImgSrc={`${process.env.REACT_APP_IMG_URL}/icons/arrow/0${triangleImgCode}.png`}
          />
        </CharacterContainer>
      </div>

      <StateBarContainer>
        <StateBar>내 새끼 밥주는 중...</StateBar>
      </StateBarContainer>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
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

import useRandomCharacter from '../../hooks/useRandomCharacter';

export default function SingleMode(): JSX.Element {
  useRandomCharacter();

  const nickName = useAppSelector(selectNickname);
  const imgCodeAll = useAppSelector(selectCharacterImgCode);
  const triangleImgCode = useAppSelector(selectTriangleImgCode);

  const [pomoCount, setPomoCount] = useState<number>(1);

  return (
    <Container>
      <div>
        <TimerContainer>
          <PomodoroTimer />
          <PomoCheckContainer>
            <PomoCheckImage src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_on.png`} alt="pomo_check_off" />
            <PomoCheckImage src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_off.png`} alt="pomo_check_off" />
            <PomoCheckImage src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_off.png`} alt="pomo_check_off" />
            <PomoCheckImage src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_off.png`} alt="pomo_check_off" />
          </PomoCheckContainer>
        </TimerContainer>
        <CharacterContainer>
          <Character
            nickname={nickName}
            characterImgSrc={`${process.env.REACT_APP_IMG_URL}/character/all/work/0${imgCodeAll}_01.png`}
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

import React, { useState, useEffect } from 'react';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import Character from '../../components/character/character.component';
import StateBar from '../../components/state-bar/state-bar.component';
import { StateBarContainer, CharacterContainer, TimerContainer } from './single-mode.style';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectNickname, selectImgCodeAll } from '../../store/modules/main/main.select';

import useRandomCharacter from '../../hooks/useRandomCharacter';

export default function SingleMode(): JSX.Element {
  useRandomCharacter();

  const nickName = useAppSelector(selectNickname);
  const imgCodeAll = useAppSelector(selectImgCodeAll);

  return (
    <div>
      <div>
        <TimerContainer>
          <PomodoroTimer />
        </TimerContainer>
        <CharacterContainer>
          <Character
            nickname={nickName}
            characterImgSrc={`${process.env.REACT_APP_IMG_URL}/character/all/work/0${imgCodeAll}_01.png`}
          />
        </CharacterContainer>
      </div>

      <StateBarContainer>
        <StateBar>내 새끼 밥주는 중...!</StateBar>
      </StateBarContainer>
    </div>
  );
}

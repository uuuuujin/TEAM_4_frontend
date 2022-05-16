import React from 'react';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import Character from '../../components/character/character.component';
import StateBar from '../../components/state-bar/state-bar.component';
import CatImg from '../../assets/images/cat.png';

import { StateBarContainer, CharacterContainer, TimerContainer } from './single-mode.style';

export default function SingleMode(): JSX.Element {
  return (
    <div>
      <PomodoroTimer />
      <CharacterContainer>
        <Character nickname="용감한푸른도마뱀!" characterImgSrc={CatImg} />
      </CharacterContainer>
      <StateBarContainer>
        <StateBar>내 새끼 밥주는 중...</StateBar>
      </StateBarContainer>
    </div>
  );
}

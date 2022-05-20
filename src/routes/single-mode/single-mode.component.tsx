import React, { useState, useEffect } from 'react';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import Character from '../../components/character/character.component';
import StateBar from '../../components/state-bar/state-bar.component';
import { StateBarContainer, CharacterContainer, TimerContainer } from './single-mode.style';

export default function SingleMode(): JSX.Element {
  const [nickname, setNickname] = useState('');
  const [imgCode, setImgCode] = useState('');
  useEffect(() => {
    setNickname(window.localStorage.getItem(`${process.env.REACT_APP_NICKNAME_KEY}`) || '');
    setImgCode(window.localStorage.getItem(`${process.env.REACT_APP_IMGCODE_KEY}`) || '');
  }, [nickname]);

  return (
    <div>
      <div>
        <TimerContainer>
          <PomodoroTimer />
        </TimerContainer>
        <CharacterContainer>
          <Character nickname={nickname} characterImgSrc={`${process.env.REACT_APP_IMG_URL}/all/${imgCode}.png`} />
        </CharacterContainer>
      </div>

      <StateBarContainer>
        <StateBar>내 새끼 밥주는 중...!</StateBar>
      </StateBarContainer>
    </div>
  );
}

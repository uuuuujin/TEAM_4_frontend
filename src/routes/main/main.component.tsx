import React, { useEffect, useState } from 'react';

import Character from '../../components/character/character.component';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import MultiModeSelectModal from '../../components/multi-mode-select-modal/multi-mode-select-modal.component';
import SingleModeSelectModal from '../../components/single-mode-select-modal/single-mode-select-modal.component';
// import { ReactComponent as PodongLogo } from '../../assets/icons/logo_pixel_ver 1.svg';
import PodongLogo from '../../assets/images/logo.png';
import SingleModeButtonImg from '../../assets/images/single_mode_button.png';
import SingleModeButtonHoverImg from '../../assets/images/single_mode_button_hover.png';
import SingleModeButtonActiveImg from '../../assets/images/single_mode_button_active.png';
import MultiModeButtonImg from '../../assets/images/multi_mode_button.png';
import MultiModeButtonHoverImg from '../../assets/images/multi_mode_button_hover.png';
import MultiModeButtonActiveImg from '../../assets/images/multi_mode_button_active.png';

import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { getRandomAsync } from '../../store/modules/main/main.slice';
import { selectGetRandomChracter } from '../../store/modules/main/main.select';
import { modalAction } from '../../store/modules/modal/modal.slice';

import {
  TimerContainer,
  LogoImg,
  CharacterContainer,
  ModeSelectButtonContainer,
  LogoContainer,
  ModeSelectButton,
  ModeSelectButtonText,
  PomoGuideButtonContainer,
  PomoGuideButtonText,
} from './main.style';

export default function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const getRandomCompleted = useAppSelector(selectGetRandomChracter);

  const [nickname, setNickname] = useState('');
  const [imgCode, setImgCode] = useState('');

  useEffect(() => {
    async function fetchCharacter() {
      await dispatch(getRandomAsync());
      setNickname(window.localStorage.getItem(`${process.env.REACT_APP_NICKNAME_KEY}`) || '');
      setImgCode(window.localStorage.getItem(`${process.env.REACT_APP_IMGCODE_KEY}`) || '');
    }
    fetchCharacter();
  }, [dispatch, getRandomCompleted]);

  const handleMultiModalClick = () => {
    dispatch(modalAction.radioMultiModeSelectModal());
  };

  const handleSingleModalClick = () => {
    dispatch(modalAction.radioSingleModeSelectModal());
  };

  return (
    <div className="App">
      <LogoContainer>
        <LogoImg src={PodongLogo} alt="포동포동 로고" />
      </LogoContainer>
      <TimerContainer>
        <PomodoroTimer />
      </TimerContainer>
      <CharacterContainer>
        {getRandomCompleted && (
          <Character nickname={nickname} characterImgSrc={`${process.env.REACT_APP_IMG_URL}/all/${imgCode}.png`} />
        )}
      </CharacterContainer>
      <ModeSelectButtonContainer>
        <ModeSelectButton
          normalImg={SingleModeButtonImg}
          hoverImg={SingleModeButtonHoverImg}
          activeImg={SingleModeButtonActiveImg}
          onClick={handleSingleModalClick}
        >
          <ModeSelectButtonText>싱글모드</ModeSelectButtonText>
        </ModeSelectButton>
        <ModeSelectButton
          normalImg={MultiModeButtonImg}
          hoverImg={MultiModeButtonHoverImg}
          activeImg={MultiModeButtonActiveImg}
          onClick={handleMultiModalClick}
        >
          <ModeSelectButtonText>멀티모드</ModeSelectButtonText>
        </ModeSelectButton>
      </ModeSelectButtonContainer>
      <PomoGuideButtonContainer>
        <PomoGuideButtonText>뽀모도로란?</PomoGuideButtonText>
      </PomoGuideButtonContainer>
      <SingleModeSelectModal />
      <MultiModeSelectModal />
    </div>
  );
}

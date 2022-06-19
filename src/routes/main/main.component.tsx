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

import useRandomCharacter from '../../hooks/useRandomCharacter';

import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { getRandomAsync } from '../../store/modules/main/main.slice';
import {
  selectGetRandomChracter,
  selectNickname,
  selectCharacterImgCode,
  selectTriangleImgCode,
} from '../../store/modules/main/main.select';
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

  const nickName = useAppSelector(selectNickname);
  const characterImgCode = useAppSelector(selectCharacterImgCode);
  const triangleImgCode = useAppSelector(selectTriangleImgCode);

  useRandomCharacter();

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
        {getRandomCompleted ? (
          <Character
            nickname={nickName}
            characterImgSrc={`${process.env.REACT_APP_IMG_URL}/character/all/work/0${characterImgCode}_01.png`}
            triangleImgSrc={`${process.env.REACT_APP_IMG_URL}/icons/arrow/0${triangleImgCode}.png`}
          />
        ) : (
          <Character
            nickname="포동포동 아기고양이"
            characterImgSrc={`${process.env.REACT_APP_IMG_URL}/character/all/work/01_01.png`}
            triangleImgSrc={`${process.env.REACT_APP_IMG_URL}/icons/arrow/01.png`}
          />
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

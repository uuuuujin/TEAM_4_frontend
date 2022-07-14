import React, { useCallback, useEffect, useState } from 'react';

import Character from '../../components/character/character.component';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import MultiModeSelectModal from '../../components/multi-mode-select-modal/multi-mode-select-modal.component';
import SingleModeSelectModal from '../../components/single-mode-select-modal/single-mode-select-modal.component';
import ExplainModal from '../../components/explain-modal/explain-modal.component';
import SingleModeButtonImg from '../../assets/images/single_mode_button.png';
import SingleModeButtonHoverImg from '../../assets/images/single_mode_button_hover.png';
import SingleModeButtonActiveImg from '../../assets/images/single_mode_button_active.png';
import MultiModeButtonImg from '../../assets/images/multi_mode_button.png';
import MultiModeButtonHoverImg from '../../assets/images/multi_mode_button_hover.png';
import MultiModeButtonActiveImg from '../../assets/images/multi_mode_button_active.png';

import useRandomCharacter from '../../hooks/useRandomCharacter';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectGetRandomChracter, selectNickname, selectCharacterImgCode } from '../../store/modules/main/main.select';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { getRandomAsync } from '../../store/modules/main/main.slice';

import {
  Container,
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

  // useRandomCharacter();

  const handleMultiModalClick = () => {
    dispatch(modalAction.radioMultiModeSelectModal());
  };

  const handleSingleModalClick = () => {
    dispatch(modalAction.radioSingleModeSelectModal());
  };

  const handleExplainModalClick = () => {
    dispatch(modalAction.radioExplainModal());
  };

  const [characterMoving, setCharacterMoving] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCharacterMoving((v) => !v), 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="App">
      {/* <LogoContainer>
        <LogoImg src={`${process.env.REACT_APP_IMG_URL}/logo.png`} alt="포동포동 로고" />
      </LogoContainer> */}
      <TimerContainer>
        <PomodoroTimer />
      </TimerContainer>
      <CharacterContainer>
        <Character
          nickname={nickName}
          characterImgSrc={
            characterMoving
              ? `${process.env.REACT_APP_IMG_URL}/character/all/work/0${characterImgCode}_01.png`
              : `${process.env.REACT_APP_IMG_URL}/character/all/work/0${characterImgCode}_02.png`
          }
        />
        <button onClick={() => dispatch(getRandomAsync())}>으어어</button>
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
      <PomoGuideButtonContainer onClick={handleExplainModalClick}>
        <PomoGuideButtonText>뽀모도로란?</PomoGuideButtonText>
      </PomoGuideButtonContainer>
      <SingleModeSelectModal />
      <MultiModeSelectModal />
      <ExplainModal />
    </Container>
  );
}

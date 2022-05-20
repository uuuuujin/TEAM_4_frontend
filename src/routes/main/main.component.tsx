import React, { useEffect, useState } from 'react';

import Character from '../../components/character/character.component';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import MultiModeSelectModal from '../../components/multi-mode-select-modal/multi-mode-select-modal.component';
// import { ReactComponent as PodongLogo } from '../../assets/icons/logo_pixel_ver 1.svg';
import PodongLogo from '../../assets/images/logo.png';
import SingleModeButtonHoverImg from '../../assets/images/single_mode_button_hover.png';
import SingleModeButtonClickImg from '../../assets/images/single_mode_button_click.png';
import MultiModeButtonHoverImg from '../../assets/images/multi_mode_button_hover.png';
import MultiModeButtonClickImg from '../../assets/images/multi_mode_button_click.png';

import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { getRandomAsync } from '../../store/modules/main/main.slice';
import { selectGetRandomChracter } from '../../store/modules/main/main.select';
import { modalAction } from '../../store/modules/modal/modal.slice';

import { TimerContainer, CharacterContainer, ButtonContainer, LogoContainer, ButtonWrap, ImgText } from './main.style';

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
  return (
    <div className="App">
      <LogoContainer>
        <img src={PodongLogo} alt="포동포동 로고" />
      </LogoContainer>
      <TimerContainer>
        <PomodoroTimer />
      </TimerContainer>
      <CharacterContainer>
        {getRandomCompleted && (
          <Character nickname={nickname} characterImgSrc={`${process.env.REACT_APP_IMG_URL}/all/${imgCode}.png`} />
        )}
      </CharacterContainer>
      <ButtonContainer>
        <ButtonWrap hoverImg={SingleModeButtonHoverImg} clickImg={SingleModeButtonClickImg}>
          <ImgText>싱글모드</ImgText>
        </ButtonWrap>
        <ButtonWrap
          hoverImg={MultiModeButtonHoverImg}
          clickImg={MultiModeButtonClickImg}
          onClick={handleMultiModalClick}
        >
          <ImgText>멀티모드</ImgText>
        </ButtonWrap>
      </ButtonContainer>
      <MultiModeSelectModal />
    </div>
  );
}

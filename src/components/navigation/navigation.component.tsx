import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  LogoContainer,
  NavBoxContainer,
  NavBox,
  LogoImg,
  NavImg,
  GuideScreenContainer,
  GuideScreen,
  ExitModalContainer,
} from './navigation.style';
import MypageDropdown from '../mypage-dropdown/mypage-dropdown.component';
import ExitModal from '../exit-modal/exit-modal.component';

import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsGuideModalOpen } from '../../store/modules/modal/modal.select';
import { selectTimerStart } from '../../store/modules/timer/timer.select';

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isMypageOpen, setIsMypageOpen] = useState(false);

  const isGuideModalOpen = useAppSelector(selectIsGuideModalOpen);
  const isTimerStarted = useAppSelector(selectTimerStart);

  const toggleIsMypageOpen = () => {
    setIsMypageOpen(!isMypageOpen);
  };

  const handleGuideModalClick = () => {
    dispatch(modalAction.radioGuideModal());
  };

  const handleExitModalClick = () => {
    if (isTimerStarted) dispatch(modalAction.radioExitModal());
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <LogoImg src={`${process.env.REACT_APP_IMG_URL}/logo.png`} alt="로고이미지" onClick={handleExitModalClick} />
          <ExitModalContainer>
            <ExitModal />
          </ExitModalContainer>
        </LogoContainer>
        <NavBoxContainer>
          <NavBox>
            <NavImg content="mypage" onClick={toggleIsMypageOpen} />
          </NavBox>
          <NavBox>
            <NavImg content="info" onClick={handleGuideModalClick} />
          </NavBox>
        </NavBoxContainer>

        {isMypageOpen && <MypageDropdown />}
        <GuideScreenContainer className={isGuideModalOpen ? 'show' : ''}>
          <GuideScreen onClick={handleGuideModalClick} />
        </GuideScreenContainer>
      </NavigationContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
}

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
import ExitModal from '../exit-modal/exit-modal.component';
import ProfileModal from '../profile-modal/profile-modal.component';

import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsGuideModalOpen } from '../../store/modules/modal/modal.select';
import { selectTimerStart } from '../../store/modules/timer/timer.select';

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const isGuideModalOpen = useAppSelector(selectIsGuideModalOpen);
  const isTimerStarted = useAppSelector(selectTimerStart);

  const handleProfileModal = () => {
    dispatch(modalAction.radioProfileModal());
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
            <NavImg content="mypage" onClick={handleProfileModal} />
          </NavBox>
          <NavBox>
            <NavImg content="info" onClick={handleGuideModalClick} />
          </NavBox>
        </NavBoxContainer>

        <GuideScreenContainer className={isGuideModalOpen ? 'show' : ''}>
          <GuideScreen
            src={`${process.env.REACT_APP_IMG_URL}/modal/guide_screen.png`}
            onClick={handleGuideModalClick}
          />
        </GuideScreenContainer>

        <ProfileModal />
      </NavigationContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
}

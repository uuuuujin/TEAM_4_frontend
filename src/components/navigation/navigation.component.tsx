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
} from './navigation.style';
import PodongLogo from '../../assets/images/logo.png';
import MypageDropdown from '../mypage-dropdown/mypage-dropdown.component';

import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsGuideModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const [currentUser, setCurrentUser] = useState(false);
  const [isMypageOpen, setIsMypageOpen] = useState(false);

  const isGuideModalOpen = useAppSelector(selectIsGuideModalOpen);

  const loginHandler = () => {
    setCurrentUser(!currentUser);
  };

  const toggleIsMypageOpen = () => {
    setIsMypageOpen(!isMypageOpen);
  };

  const handleGuideModalClick = () => {
    dispatch(modalAction.radioGuideModal());
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoImg src={PodongLogo} alt="로고이미지" />
        </LogoContainer>
        <NavBoxContainer>
          <NavBox>
            {currentUser ? (
              <NavImg content="mypage" onClick={toggleIsMypageOpen} />
            ) : (
              <NavImg content="mypage" onClick={loginHandler} />
            )}
          </NavBox>

          <NavBox>
            <NavImg content="info" onClick={handleGuideModalClick} />
          </NavBox>
        </NavBoxContainer>

        {isMypageOpen && <MypageDropdown />}
        {isGuideModalOpen && (
          <GuideScreenContainer>
            <GuideScreen onClick={handleGuideModalClick} />
          </GuideScreenContainer>
        )}
      </NavigationContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
}

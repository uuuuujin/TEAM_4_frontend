import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { NavigationContainer, LogoContainer, NavBoxContainer, NavBox, LogoImg } from './navigation.style';
// import { ReactComponent as PodongLogo } from '../../assets/icons/logo_pixel_ver 1.svg';
import PodongLogo from '../../assets/images/logo.png';
import MypageDropdown from '../mypage-dropdown/mypage-dropdown.component';

export default function Navigation(): JSX.Element {
  const [currentUser, setCurrentUser] = useState(false);
  const [isMypageOpen, setIsMypageOpen] = useState(false);

  const loginHandler = () => {
    setCurrentUser(!currentUser);
  };

  const toggleIsMypageOpen = () => {
    setIsMypageOpen(!isMypageOpen);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoImg src={PodongLogo} alt="로고이미지" />
        </LogoContainer>
        <NavBoxContainer>
          {currentUser ? (
            <NavBox onClick={toggleIsMypageOpen}>My Page</NavBox>
          ) : (
            <NavBox onClick={loginHandler}>SING IN</NavBox>
          )}
          <NavBox>가이드</NavBox>
        </NavBoxContainer>
        {isMypageOpen && <MypageDropdown />}
      </NavigationContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
}

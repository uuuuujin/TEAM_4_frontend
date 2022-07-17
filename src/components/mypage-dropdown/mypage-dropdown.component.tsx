import React, { useState } from 'react';
import SocialLoginMenu from '../social-login-menu/social-login-menu.component';
import {
  MypageDropdownContainer,
  MypageProfileImg,
  MypageProfileName,
  MypageProfileEmail,
  LogoutButtonContainer,
} from './mypage-dropdown.style';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsLoggedIn } from '../../store/modules/main/main.select';
import { mainAction } from '../../store/modules/main/main.slice';

export default function MypageDropdown(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(mainAction.logOut());
  };

  return (
    <MypageDropdownContainer>
      {isLoggedIn ? (
        <>
          <MypageProfileImg />
          <MypageProfileName>양성훈</MypageProfileName>
          <MypageProfileEmail>didtjdgns852@gmail.com</MypageProfileEmail>
          <LogoutButtonContainer onClick={handleLogout} />
        </>
      ) : (
        <SocialLoginMenu isMyPomo={false} />
      )}
    </MypageDropdownContainer>
  );
}

import React, { useState } from 'react';

import Button, { ButtonTypeClasses } from '../button/button.component';
import SocialLoginMenu from '../social-login-menu/social-login-menu.component';
import {
  MypageDropdownContainer,
  MypageProfileImg,
  MypageProfileName,
  MypageProfileEmail,
  LogoutButtonContainer,
} from './mypage-dropdown.style';

export default function MypageDropdown(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <MypageDropdownContainer className={!isLoggedIn ? 'socialLogin' : ''}>
      {isLoggedIn ? (
        <>
          <MypageProfileImg />
          <MypageProfileName>양성훈</MypageProfileName>
          <MypageProfileEmail>didtjdgns852@gmail.com</MypageProfileEmail>
          <LogoutButtonContainer />
        </>
      ) : (
        <SocialLoginMenu isMyPomo={false} />
      )}
    </MypageDropdownContainer>
  );
}

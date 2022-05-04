import React from 'react';

import Button, { ButtonTypeClasses } from '../button/button.component';
import {
  MypageDropdownContainer,
  MypageProfileImg,
  MypageProfileName,
  MypageProfileEmail,
} from './mypage-dropdown.style';

export default function MypageDropdown(): JSX.Element {
  return (
    <MypageDropdownContainer>
      <MypageProfileImg />
      <MypageProfileName>양성훈</MypageProfileName>
      <MypageProfileEmail>didtjdgns852@gmail.com</MypageProfileEmail>
      <Button buttonType={ButtonTypeClasses.inverted}>로그아웃</Button>
    </MypageDropdownContainer>
  );
}

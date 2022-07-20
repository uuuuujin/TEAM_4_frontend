import React from 'react';
import { SocialLoginMenuContainer, LoginButton } from './social-login-menu.style';

interface SocialLoginMenuProp {
  isMyPomo: boolean;
}

export default function SocialLoginMenu({ isMyPomo }: SocialLoginMenuProp): JSX.Element {
  const LOGIN_PLATFORM = ['kakao', 'google'];

  return (
    <SocialLoginMenuContainer>
      {LOGIN_PLATFORM.map((platform) => {
        return (
          <a href={`${process.env.REACT_APP_API_URL}/oauth/${platform}`} key={platform}>
            {isMyPomo ? (
              <LoginButton src={`${process.env.REACT_APP_IMG_URL}/login/login_${platform}_mypomo.png`} />
            ) : (
              <LoginButton
                className="mypage"
                src={`${process.env.REACT_APP_IMG_URL}/login/login_${platform}_mypage.png`}
              />
            )}
          </a>
        );
      })}
    </SocialLoginMenuContainer>
  );
}

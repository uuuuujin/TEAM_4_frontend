import React from 'react';

import SocialLoginButton, { SOCIAL_TYPE_CLASSES } from '../social-login-button/social-login-button.component';
import { SocialLoginMenuContainer, LoginButton } from './social-login-menu.style';

import NaverLoginMyPomo from '../../assets/images/login_naver_mypomo.png';
import GoogleLoginMyPomo from '../../assets/images/login_google_mypomo.png';
import KakaoLoginMyPomo from '../../assets/images/login_kakao_mypomo.png';

import NaverLoginMyPage from '../../assets/images/login_naver_mypage.png';
import KakaoLoginMyPage from '../../assets/images/login_kakao_mypage.png';
import GoogleLoginMyPage from '../../assets/images/login_google_mypage.png';

interface SocialLoginMenuProp {
  isMyPomo: boolean;
}

export default function SocialLoginMenu({ isMyPomo }: SocialLoginMenuProp): JSX.Element {
  return (
    <SocialLoginMenuContainer>
      {isMyPomo ? (
        <>
          <a href={`${process.env.REACT_APP_API_URL}/oauth/naver`}>
            <LoginButton src={`${process.env.REACT_APP_IMG_URL}/login/login_naver_mypomo.png`} alt="네이버로 로그인" />
          </a>

          <a href={`${process.env.REACT_APP_API_URL}/oauth/kakao`}>
            <LoginButton src={`${process.env.REACT_APP_IMG_URL}/login/login_kakao_mypomo.png`} alt="카카오로 로그인" />
          </a>

          <a href={`${process.env.REACT_APP_API_URL}/oauth/google`}>
            <LoginButton src={`${process.env.REACT_APP_IMG_URL}/login/login_google_mypomo.png`} alt="구글로 로그인" />
          </a>
        </>
      ) : (
        <>
          <LoginButton
            className="mypage"
            src={`${process.env.REACT_APP_IMG_URL}/login/login_naver_mypage.png`}
            alt="네이버로 로그인"
          />
          <a href={`${process.env.REACT_APP_API_URL}/oauth/kakao`}>
            <LoginButton
              className="mypage"
              src={`${process.env.REACT_APP_IMG_URL}/login/login_kakao_mypage.png`}
              alt="카카오로 로그인"
            />
          </a>

          <a href={`${process.env.REACT_APP_API_URL}/oauth/google`}>
            <LoginButton
              className="mypage"
              src={`${process.env.REACT_APP_IMG_URL}/login/login_google_mypage.png`}
              alt="구글로 로그인"
            />
          </a>
        </>
      )}
    </SocialLoginMenuContainer>
  );
}

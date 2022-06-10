import React from 'react';

import GoogleLoginLogo from '../../assets/icons/google_login_logo.svg';
import KakaoLoginLogo from '../../assets/icons/kakao_login_logo.svg';
import { SocialLoginButtonContainer, SocialLoginButtonLogo, SocialLoginButtonText } from './social-login-button.style';

interface SocialLoginButtonProp extends React.ComponentPropsWithRef<'button'> {
  socialType: string;
}

export interface SocialLoginButtonTheme {
  backgroundColor: string;
  logoSrc: string;
  text: string;
  textColor: string;
  logoSize: string;
}

export const SOCIAL_TYPE_CLASSES = {
  google: 'google',
  kakao: 'kakao',
};

const getButtonTheme = (socialType: string): SocialLoginButtonTheme =>
  ({
    [SOCIAL_TYPE_CLASSES.google]: {
      backgroundColor: '#fff',
      logoSrc: GoogleLoginLogo,
      logoSize: '45px',
      text: 'Google',
      textColor: 'rgb(0, 0, 0, 0.54)',
    },
    [SOCIAL_TYPE_CLASSES.kakao]: {
      backgroundColor: '#FEE500',
      logoSrc: KakaoLoginLogo,
      logoSize: '18px',
      text: 'Kakao',
      textColor: 'rgb(0, 0, 0, 1)',
    },
  }[socialType]);

export default function SocialLoginButton({ socialType, ...otherprops }: SocialLoginButtonProp) {
  const buttonTheme = getButtonTheme(socialType);
  return (
    <SocialLoginButtonContainer {...otherprops} styleTheme={buttonTheme}>
      <SocialLoginButtonLogo styleTheme={buttonTheme} alt="logo" src={buttonTheme.logoSrc} />
      <SocialLoginButtonText>Sign in with {buttonTheme.text}</SocialLoginButtonText>
    </SocialLoginButtonContainer>
  );
}

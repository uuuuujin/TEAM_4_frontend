import React from 'react';

import SocialLoginButton, { SOCIAL_TYPE_CLASSES } from '../social-login-button/social-login-button.component';
import { SocialLoginMenuContainer } from './social-login-menu.style';

export default function SocialLoginMenu(): JSX.Element {
  return (
    <SocialLoginMenuContainer>
      <SocialLoginButton socialType={SOCIAL_TYPE_CLASSES.google} />
      <SocialLoginButton socialType={SOCIAL_TYPE_CLASSES.instagram} />
      <SocialLoginButton socialType={SOCIAL_TYPE_CLASSES.instagram} />
    </SocialLoginMenuContainer>
  );
}

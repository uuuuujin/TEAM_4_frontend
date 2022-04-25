import styled from 'styled-components';

import { SocialLoginButtonTheme } from './social-login-button.component';

interface SocialLoginButtonStyleProp {
  styleTheme: SocialLoginButtonTheme;
}

export const SocialLoginButtonContainer = styled.button<SocialLoginButtonStyleProp>`
  background-color: ${({ styleTheme }) => styleTheme.backgroundColor};
  border: 0 solid #888;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  color: ${({ styleTheme }) => styleTheme.textColor};
`;

export const SocialLoginButtonLogo = styled.img<SocialLoginButtonStyleProp>`
  margin: 0 8px 0 0;
  margin: ${({ styleTheme }) => (styleTheme.text === 'Instargram' ? '0 14px 0 14px' : '0')};
  width: ${({ styleTheme }) => styleTheme.logoSize};
`;

export const SocialLoginButtonText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

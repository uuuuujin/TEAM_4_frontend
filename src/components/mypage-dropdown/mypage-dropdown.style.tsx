import styled from 'styled-components';
import { BaseButton, InvertedButton } from '../button/button.style';
import LogoutImg from '../../assets/images/logout_button.png';
import LogoutHoverImg from '../../assets/images/logout_hover_button.png';
import LogoutActiveImg from '../../assets/images/logout_active_button.png';

export const MypageDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 319px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 3px solid black;
  border-radius: 20px;
  background-color: #d1e9ff;
  top: 80px;
  right: 40px;
  z-index: 5;
  align-items: center;

  &.socialLogin {
    height: 224px;
    padding: 0 20px;
  }
`;

export const MypageProfileImg = styled.div`
  width: 120px;
  height: 120px;
  background-color: #fff;
  margin-bottom: 20px;
  border: 3px solid black;
  border-radius: 50%;
`;

export const MypageProfileName = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const MypageProfileEmail = styled.div`
  font-size: 13px;
  color: #696969;
`;

export const LogoutButtonContainer = styled.div`
  background-image: url(${LogoutImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 260px;
  height: 48px;
  margin-top: 25px;

  &:hover {
    background-image: url(${LogoutHoverImg});
  }

  &:active {
    background-image: url(${LogoutActiveImg});
  }
`;

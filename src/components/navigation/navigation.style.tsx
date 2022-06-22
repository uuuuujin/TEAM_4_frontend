import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import MyPageImg from '../../assets/images/mypage.png';
import MyPageHoverImg from '../../assets/images/mypage_hover.png';
import MyPageActiveImg from '../../assets/images/mypage_active.png';
import InfoImg from '../../assets/images/info.png';
import InfoHoverImg from '../../assets/images/info_hover.png';
import InfoActiveImg from '../../assets/images/info_active.png';
import GuideImg from '../../assets/images/guide_screen.png';

export const NavigationContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 10vw;
  display: flex;
  align-items: center;
  margin: 1vw 0 0 2vw;
`;

export const LogoImg = styled.img`
  width: 100%;
  -webkit-user-drag: none;
`;

export const NavBoxContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 10px 0 0;
`;

export const NavBox = styled.div`
  padding: 10px 15px;
`;

export const NavImg = styled.div<{ content: string }>`
  background-image: url(${MyPageImg});
  background-size: cover;
  width: 45px;
  height: 45px;
  cursor: pointer;

  &:hover {
    background-image: url(${MyPageHoverImg});
  }
  &:active {
    background-image: url(${MyPageActiveImg});
  }

  ${({ content }) =>
    content === 'info' &&
    css`
      background-image: url(${InfoImg});
      &:hover {
        background-image: url(${InfoHoverImg});
      }
      &:active {
        background-image: url(${InfoActiveImg});
      }
    `}
`;

export const GuideScreenContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 5;
  pointer-events: visible;
`;

export const GuideScreen = styled.div`
  background-image: url(${process.env.REACT_APP_IMG_URL}/modal/guide_screen.png);
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  cursor: pointer;
  width: 92vw;
  height: 85vh;
`;

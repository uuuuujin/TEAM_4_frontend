import styled from 'styled-components';
import { BaseButton } from '../../components/button/button.style';

export const LogoContainer = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoImg = styled.img`
  -webkit-user-drag: none;
`;

export const TimerContainer = styled.div`
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImgText = styled.span`
  font-family: 'neodgm';
  font-size: 24px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-38%, -50%);
`;

export const ButtonWrap = styled.div<{ normalImg: string; hoverImg: string; activeImg: string }>`
  background-image: url(${({ normalImg }) => normalImg});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: 284px;
  height: 80px;
  margin: 0 23px;
  padding: 0;
  position: relative;
  cursor: pointer;

  &:hover {
    background-image: url(${({ hoverImg }) => hoverImg});
    ${ImgText} {
      display: none;
    }
  }

  &:active {
    background-image: url(${({ activeImg }) => activeImg});
    ${ImgText} {
      display: none;
    }
  }
`;

export const CharacterContainer = styled.div`
  position: absolute;
  top: 43%;
  left: calc(50% + 17vw);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 13%;
  left: 50%;
  transform: translate(-50%, 0);
`;

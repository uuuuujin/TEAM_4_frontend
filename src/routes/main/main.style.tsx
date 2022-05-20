import styled from 'styled-components';
import { BaseButton } from '../../components/button/button.style';

export const LogoContainer = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  transform: translate(-38%, -56%);
`;

export const ButtonWrap = styled.div<{ hoverImg: string; clickImg: string }>`
  background-image: url(${({ hoverImg }) => hoverImg});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: 284px;
  height: 80px;
  margin: 0 23px;
  padding: 0;
  position: relative;
  cursor: pointer;

  &:active {
    background-image: url(${({ clickImg }) => clickImg});
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

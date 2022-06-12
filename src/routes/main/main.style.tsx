import styled from 'styled-components';
import { BaseButton } from '../../components/button/button.style';

import PomoGuideBtnImg from '../../assets/images/pomoguide_button.png';
import PomoGuideBtnHoverImg from '../../assets/images/pomoguide_button_hover.png';
import PomoGuideBtnActiveImg from '../../assets/images/pomoguide_button_active.png';

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

export const ModeSelectButtonContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 13%;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const ModeSelectButtonText = styled.span`
  font-family: 'neodgm';
  font-size: 24px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-38%, -50%);
`;

export const ModeSelectButton = styled.div<{ normalImg: string; hoverImg: string; activeImg: string }>`
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
    ${ModeSelectButtonText} {
      display: none;
    }
  }

  &:active {
    background-image: url(${({ activeImg }) => activeImg});
    ${ModeSelectButtonText} {
      display: none;
    }
  }
`;

export const CharacterContainer = styled.div`
  position: absolute;
  top: 41%;
  left: calc(50% + 17vw);
`;

export const PomoGuideButtonText = styled.span`
  font-family: 'NotoSans-medium';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-54%, -55%);
`;

export const PomoGuideButtonContainer = styled.div`
  background-image: url(${PomoGuideBtnImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 166px;
  height: 42px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;

  &:hover {
    background-image: url(${PomoGuideBtnHoverImg});
    ${PomoGuideButtonText} {
      display: none;
    }
  }

  &:active {
    background-image: url(${PomoGuideBtnActiveImg});
    ${PomoGuideButtonText} {
      display: none;
    }
  }
`;
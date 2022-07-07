import styled, { css } from 'styled-components';
import Lottie from 'lottie-react';

export const DescriptionImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 15px;
`;

export const DescriptionImg = styled.div<{ bgImage: string }>`
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 516px;
  height: 280px;
`;

export const LottieImage = styled(Lottie)`
  width: 512px;
  height: 278px;
  border: 2px solid #000;
`;

export const DescriptionContainer = styled.div`
  text-align: center;

  p {
    margin: 0;
    font-family: 'IBMPlexMono';
    font-size: 18px;
    letter-spacing: -1px;
  }

  p > span {
    font-weight: 600;
  }

  .fightingMsg {
    margin-top: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px 0 40px;
`;

export const PageMoveButton = styled.div<{
  normalImg: string;
  activeImg: string;
  buttonType?: string;
  clickDisabled: boolean;
}>`
  background-image: url(${({ normalImg }) => normalImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 180px;
  height: 64px;
  font-family: 'neodgm';
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  ${({ buttonType }) =>
    buttonType &&
    css`
      color: #757575;
      margin-right: 20px;
    `}

  ${({ clickDisabled }) =>
    clickDisabled &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}

  &:hover {
    color: #000;
  }

  &:active {
    color: #000;
    background-image: url(${({ activeImg }) => activeImg});
  }
`;

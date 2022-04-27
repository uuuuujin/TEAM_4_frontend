import styled from 'styled-components';
import { BaseButton, InvertedButton } from '../button/button.style';

export const MypageDropdownContainer = styled.div`
  position: absolute;
  width: 180px;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 5;
  align-items: center;
  ${BaseButton},
  ${InvertedButton} {
    margin: 8px 0 4px 0;
  }
`;

export const MypageProfileImg = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  margin: 8px 0;
`;

export const MypageProfileName = styled.div`
  margin: 8px 0 4px;
`;

export const MypageProfileEmail = styled.div`
  margin: 4px 0 8px 0;
  font-size: 12px;
`;

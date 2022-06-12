import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SingleModeSelectModalContainer = styled.div`
  padding: 24px 0;
`;

export const ModeSelectImageWrap = styled(Link)`
  cursor: pointer;
`;

export const ModeSelectImage = styled.img`
  width: 264px;
  height: 284px;
  -webkit-user-drag: none;
`;

export const SingleModeSelectModalContent = styled.div`
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 57px;
  color: grey;
  font-size: 24px;
  font-family: 'neodgm';
`;

export const SingleModeSelectModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 55px;
`;

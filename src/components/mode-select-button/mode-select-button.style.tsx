import styled from 'styled-components';

export const ModeSelectButtonContainer = styled.button`
  border: 0.5px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  width: 170px;
  height: 190px;
  background-color: #c4c4c4;
`;

export const ModeSelectButtonHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 14px 0 14px 0;
`;

export const ModeSelectButtonContent = styled.img`
  width: 120px;
  height: 100px;
  background-color: #8b8b8b;
  border-radius: 6px;
  border: 0.5px solid grey;
`;

export const ModeSelectButtonFooter = styled.div`
  margin-top: 12px;
`;

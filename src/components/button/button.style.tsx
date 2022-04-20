import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: black;
  font-weight: bolder;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const InvertedButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border: none;
`;

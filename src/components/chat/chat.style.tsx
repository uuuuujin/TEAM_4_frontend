import styled from 'styled-components';
import { InvertedButton } from '../button/button.style';

export const ChatContainer = styled.div`
  background-color: rgba(241, 241, 241, 0.7);
  height: 250px;
  width: 400px;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 40px;
  right: 40px;
`;

export const ChatItemContainer = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
  overflow: auto;
  margin: 0 8px;
`;

export const ChatForm = styled.form`
  height: 40px;
  display: flex;
  ${InvertedButton} {
    flex-grow: 1;
    height: 40px;
    line-height: 40px;
    min-width: 80px;
  }
`;

export const ChatInput = styled.input`
  flex-grow: 5;
  height: 40px;
  box-sizing: border-box;
  padding: 0 0 0 8px;
`;

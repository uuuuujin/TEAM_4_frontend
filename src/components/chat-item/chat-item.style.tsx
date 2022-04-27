import styled from 'styled-components';

export const ChatItemContainer = styled.div`
  display: flex;
  margin: 2px 0px;
`;

export const ChatItemName = styled.div`
  white-space: nowrap;
`;

export const ChatItemText = styled.div`
  flex-grow: 1;
  word-wrap: break-word;
`;

export const ChatItemDate = styled.span`
  font-size: 12px;
  color: grey;
  white-space: nowrap;
`;

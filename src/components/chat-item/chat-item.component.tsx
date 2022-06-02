import React from 'react';

import { ChatItemContainer, ChatItemName, ChatItemText, ChatItemDate } from './chat-item.style';
import { ChatMessage } from '../../store/modules/multi/multi.type';

const formatDate = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const format = `${hours > 12 ? '오후' : '오전'} ${hours % 12}:${formattedMinutes}`;
  return format;
};

export default function ChatItem({ nickName, content, date }: ChatMessage): JSX.Element {
  return (
    <ChatItemContainer>
      <ChatItemName>{nickName}&nbsp;&nbsp;:&nbsp;&nbsp;</ChatItemName>
      <ChatItemText>
        {content}
        <ChatItemDate>&nbsp;&nbsp;{formatDate(new Date(date))}</ChatItemDate>
      </ChatItemText>
    </ChatItemContainer>
  );
}

import React from 'react';

import { ChatItemContainer, ChatItemName, ChatItemText, ChatItemDate } from './chat-item.style';

export interface ChatItemProp {
  name: string;
  content: string;
  date: Date;
}

const formatDate = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const format = `${hours > 12 ? '오후' : '오전'} ${hours % 12}:${formattedMinutes}`;
  return format;
};

export default function ChatItem({ name, content, date }: ChatItemProp): JSX.Element {
  return (
    <ChatItemContainer>
      <ChatItemName>{name}&nbsp;&nbsp;:&nbsp;&nbsp;</ChatItemName>
      <ChatItemText>
        {content}
        <ChatItemDate>&nbsp;&nbsp;{formatDate(date)}</ChatItemDate>
      </ChatItemText>
    </ChatItemContainer>
  );
}

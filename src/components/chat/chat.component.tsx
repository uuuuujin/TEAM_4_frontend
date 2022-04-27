import React, { useState } from 'react';

import { ChatContainer, ChatItemContainer, ChatForm, ChatInput } from './chat.style';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import ChatItem, { ChatItemProp } from '../chat-item/chat-item.component';

export default function Chat(): JSX.Element {
  const [chatRecords, setChatRecords] = useState<ChatItemProp[]>([]);
  const [chatContent, setChatContent] = useState<string>('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newChatItem: ChatItemProp = {
      name: '양성훈',
      content: chatContent,
      date: new Date(),
    };

    setChatRecords([newChatItem, ...chatRecords]);
    setChatContent('');
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatContent(event.currentTarget.value);
  };

  return (
    <ChatContainer>
      <ChatItemContainer>
        {chatRecords.map(({ name, content, date }) => (
          <ChatItem name={name} content={content} date={date} />
        ))}
      </ChatItemContainer>
      <ChatForm onSubmit={submitHandler}>
        <ChatInput value={chatContent} onChange={changeInputHandler} />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>입력</Button>
      </ChatForm>
    </ChatContainer>
  );
}

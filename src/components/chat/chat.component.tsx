import React, { useState } from 'react';

import { ChatContainer, ChatItemContainer, ChatForm, ChatInput } from './chat.style';
import Button, { ButtonTypeClasses } from '../button/button.component';
import ChatItem from '../chat-item/chat-item.component';

import { ChatMessage } from '../../store/modules/multi/multi.type';
import { chatMessageAsync } from '../../store/modules/multi/multi.slice';
import { selectRoomId, selectMessages } from '../../store/modules/multi/multi.select';
import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { selectNickname } from '../../store/modules/main/main.select';

export default function Chat(): JSX.Element {
  const dispatch = useAppDispatch();
  const curNickName = useAppSelector(selectNickname);
  const messages = useAppSelector(selectMessages);
  const roomId = useAppSelector(selectRoomId);
  const [chatContent, setChatContent] = useState<string>('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (chatContent === '') return;

    dispatch(
      chatMessageAsync({
        roomId,
        content: chatContent,
        nickName: curNickName,
      })
    );
    setChatContent('');
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatContent(event.currentTarget.value);
  };

  return (
    <ChatContainer>
      <ChatItemContainer>
        {messages.map(({ nickName, content, date }) => (
          <ChatItem nickName={nickName} content={content} date={date} />
        ))}
      </ChatItemContainer>
      <ChatForm onSubmit={submitHandler}>
        <ChatInput maxLength={60} value={chatContent} onChange={changeInputHandler} />
        <Button buttonType={ButtonTypeClasses.inverted}>입력</Button>
      </ChatForm>
    </ChatContainer>
  );
}

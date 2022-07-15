import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';

import { ChatContainer, ChatItemContainer, ChatForm, ChatInput } from './chat.style';
import Button, { ButtonTypeClasses } from '../button/button.component';
import ChatItem from '../chat-item/chat-item.component';

import { ChatMessage } from '../../store/modules/multi/multi.type';
import { selectRoomId, selectMessages } from '../../store/modules/multi/multi.select';
import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { selectNickname } from '../../store/modules/main/main.select';

type Props = {
  socketClient: Socket;
};
export default function Chat({ socketClient }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const curNickName = useAppSelector(selectNickname);
  const [message, setMessage] = useState<any[]>([]);
  const roomId = useAppSelector(selectRoomId);
  const [chatContent, setChatContent] = useState<string>('');
  useEffect(() => {
    if (!socketClient) return;
    socketClient.on('message', (data) => {
      setMessage((prev) => [...prev, data]);
    });
  }, [socketClient]);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (chatContent === '') return;

    socketClient.emit('message', { content: chatContent, nick: curNickName });
    setChatContent('');
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatContent(event.currentTarget.value);
  };

  return (
    <ChatContainer>
      <ChatItemContainer>
        {message
          .map(({ id, nickName, content, date }) => (
            <ChatItem key={date} id={id} nickName={nickName} content={content} date={date} />
          ))
          .reverse()}
      </ChatItemContainer>
      <ChatForm onSubmit={submitHandler}>
        <ChatInput maxLength={60} value={chatContent} onChange={changeInputHandler} />
        <Button buttonType={ButtonTypeClasses.inverted}>입력</Button>
      </ChatForm>
    </ChatContainer>
  );
}

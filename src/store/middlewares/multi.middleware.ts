import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';
import { multiAction } from '../modules/multi/multi.slice';
import { ChatMessage, Member } from '../modules/multi/multi.type';

export const multiMiddleware: Middleware = (store) => {
  let socket: Socket;
  const { dispatch } = store;

  return (next) => (action) => {
    if (multiAction.startConnectSocket.match(action)) {
      const multiStore = store.getState().multi;
      socket = io(`${process.env.REACT_APP_API_URL}/room-FRIENDS`);
      socket.on('connect', () => {
        console.log('socket connect');
        socket.emit('enter', {
          id: multiStore.id,
          roomid: multiStore.roomId,
        });
      });

      socket.on('join', (arg) => {
        const member: Member = {
          id: arg.id,
          Nick: arg.Nick,
          all: arg.all,
          logined: arg.logined,
        };
        dispatch(multiAction.addNewMember(member));
      });

      socket.on('message', (arg) => {
        console.log(arg);
        const chat: ChatMessage = {
          id: arg.id,
          content: arg.content,
          date: arg.createdAt,
          nickName: arg.member.Nick,
        };
        dispatch(multiAction.addChatMessage(chat));
      });

      socket.on('ConnectedUsers', () => {
        dispatch(multiAction.connectionSuccessed());
      });

      socket.on('disconnect', () => {
        dispatch(multiAction.connectionFinished());
      });
    }
    return next(action);
  };
};

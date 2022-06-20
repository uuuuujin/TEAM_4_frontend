import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';
import { multiAction } from '../modules/multi/multi.slice';
import { timerAction } from '../modules/timer/timer.slice';
import { ChatMessage, Member } from '../modules/multi/multi.type';
import { PomodoroTimerTypes } from '../modules/timer/timer.type';

export const multiMiddleware: Middleware = (store) => {
  let socket: Socket;
  const { dispatch } = store;

  return (next) => (action) => {
    if (multiAction.startConnectSocket.match(action)) {
      const multiStore = store.getState().multi;
      const mainStore = store.getState().main;
      socket = io(`${process.env.REACT_APP_API_URL}/room-FRIENDS`);
      socket.on('connect', () => {
        console.log('socket connect');
        socket.emit('enter', {
          nickname: mainStore.nickname,
          logined: false,
          roomid: multiStore.roomId,
        });
      });

      socket.on('join', (arg) => {
        const newMember: Member = {
          id: arg.id,
          Nick: arg.Nick,
          all: arg.all,
          logined: arg.logined,
        };
        dispatch(multiAction.updateMember([...multiStore.members, newMember]));
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

      socket.on('ConnectedUsers', (arg) => {
        dispatch(multiAction.connectionSuccessed());
      });

      socket.on('leave', ({ data }) => {
        const { nick, logined } = data;
        const newMembers: Member[] = multiStore.members.filter(
          (member: Member) => !(member.Nick === nick && member.logined === logined)
        );
        dispatch(multiAction.updateMember(newMembers));
      });

      socket.on('start', () => {
        dispatch(timerAction.updateTimerTypes(PomodoroTimerTypes.short_pomo));
      });

      socket.on('disconnect', () => {
        dispatch(multiAction.connectionFinished());
      });
    }

    if (timerAction.startMultiTimer.match(action)) {
      console.log('b');
      socket.emit('start');
    }

    return next(action);
  };
};

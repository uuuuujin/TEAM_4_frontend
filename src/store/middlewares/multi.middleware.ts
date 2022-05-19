import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';
import { multiAction } from '../modules/multi/multi.slice';

export const multiMiddleware: Middleware = (store) => {
  let socket: Socket;
  const { dispatch } = store;

  return (next) => (action) => {
    if (multiAction.startConnectSocket.match(action)) {
      const multiStore = store.getState().multi;
      socket = io(process.env.REACT_APP_API_URL.concat('/room-friends'));

      socket.on('connect', () => {
        socket.emit('enter', {
          id: multiStore.id,
          roomId: multiStore.roomId,
        });
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

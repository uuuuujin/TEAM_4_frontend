import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';
import { multiAction } from '../modules/multi/multi.slice';

const multiMiddleware: Middleware = (store) => {
  let socket: Socket;
  const { dispatch } = store;

  return (next) => (action) => {
    if (multiAction.startConnecting.match(action)) {
      try {
        socket = io(process.env.REACT_APP_SOCKET_API_URL);
      } catch (error) {
        dispatch(multiAction.connectionFailed());
        return next(action);
      }

      socket.on('connect', () => {
        dispatch(multiAction.connectionSuccessed());
      });

      socket.on('disconnect', () => {
        dispatch(multiAction.connectionFinished());
      });
    }
    return next(action);
  };
};

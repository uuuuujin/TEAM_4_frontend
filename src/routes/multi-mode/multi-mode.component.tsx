import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { createRoomAsync, enterRoomAsync, multiAction } from '../../store/modules/multi/multi.slice';
import { selectIsEntered, selectRoomId, selectIsConnected } from '../../store/modules/multi/multi.select';

export default function MultiMode(): JSX.Element {
  const dispatch = useAppDispatch();

  const { roomIdParam } = useParams();

  const isEntered = useAppSelector(selectIsEntered);
  const roomId = useAppSelector(selectRoomId);
  const isConnected = useAppSelector(selectIsConnected);

  useEffect(() => {
    if (roomIdParam === 'createRoom') {
      dispatch(createRoomAsync('didtjdgns852@gmail.com'));
    } else if (roomIdParam) {
      dispatch(
        multiAction.updateRoomId({
          roomId: roomIdParam,
        })
      );
    }
  }, [dispatch, roomIdParam]);

  useEffect(() => {
    if (roomId !== '') {
      dispatch(
        enterRoomAsync({
          roomId,
          nickname: '용감한 도마뱀',
        })
      );
    }
  }, [dispatch, roomId]);

  useEffect(() => {
    if (isEntered) {
      dispatch(multiAction.startConnectSocket());
    }
  }, [dispatch, isEntered]);
  return <div>{!isConnected && <Outlet />}</div>;
}

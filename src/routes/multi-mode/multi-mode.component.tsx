import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { createRoomAsync, enterRoomAsync, multiAction } from '../../store/modules/multi/multi.slice';
import {
  selectIsEntered,
  selectRoomId,
  selectIsConnected,
  selectMembers,
} from '../../store/modules/multi/multi.select';
import { selectNickname, selectCharacterImgCode } from '../../store/modules/main/main.select';
import useRandomCharacter from '../../hooks/useRandomCharacter';

import {
  Container,
  TimerContainer,
  ChracterPosition,
  ButtonContainer,
  LinkContainer,
  GuidanceText,
  CopyMsgContainer,
} from './multi-mode.style';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import Character from '../../components/character/character.component';
import Button from '../../components/button/button.component';
import MultiLink from '../../components/multi-link/multi-link.component';
import ToastHook from '../../hooks/toast.hook';
import CopyMsg from '../../components/copy-message/copy-message.component';
import Chat from '../../components/chat/chat.component';
import { timerAction } from '../../store/modules/timer/timer.slice';

export default function MultiMode(): JSX.Element {
  const dispatch = useAppDispatch();

  const { roomIdParam } = useParams();

  const isEntered = useAppSelector(selectIsEntered);
  const roomId = useAppSelector(selectRoomId);
  const isConnected = useAppSelector(selectIsConnected);
  const members = useAppSelector(selectMembers);

  const nickName = useAppSelector(selectNickname);
  const imgCodeAll = useAppSelector(selectCharacterImgCode);

  useRandomCharacter();

  useEffect(() => {
    if (roomIdParam === 'createRoom' && nickName !== '') {
      console.log('nickname');
      console.log(nickName);
      console.log('createRoomAsync');
      dispatch(createRoomAsync(nickName));
    } else if (roomIdParam) {
      console.log('multiActionUpdateRoomId');
      dispatch(
        multiAction.updateRoomId({
          roomId: roomIdParam,
        })
      );
    }
  }, [dispatch, roomIdParam, nickName]);

  useEffect(() => {
    console.log('enterRoomAsync');
    if (roomId !== '' && nickName !== '') {
      dispatch(
        enterRoomAsync({
          roomId,
          nickname: nickName,
          imgCodeAll: String(imgCodeAll),
        })
      );
    }
  }, [dispatch, roomId, imgCodeAll, nickName]);

  useEffect(() => {
    console.log('multiActionStartConnectSocket');
    if (isEntered) {
      dispatch(multiAction.startConnectSocket());
    }
  }, [dispatch, isEntered]);

  const startButtonHandler = () => {
    dispatch(timerAction.startMultiTimer());
  };

  const [toastState, setToastState] = useState<boolean>(false);
  ToastHook(toastState, setToastState);

  return (
    <Container>
      {!isConnected && <Outlet />}
      <TimerContainer>
        <PomodoroTimer />
      </TimerContainer>
      {members.map((item, index) => {
        return (
          <ChracterPosition key={item.Nick} positionNum={index + 1}>
            <Character
              nickname={item.Nick}
              characterImgSrc={`${process.env.REACT_APP_IMG_URL}/character/all/work/0${item.all}_01.png`}
            />
          </ChracterPosition>
        );
      })}
      <ButtonContainer>
        <Button onClick={startButtonHandler}>시작하기</Button>
      </ButtonContainer>

      <GuidanceText>링크를 보내 친구들과 함꼐하자!</GuidanceText>
      <LinkContainer>
        <MultiLink setToastState={setToastState}>{`http://localhost:3000/multi/${roomId}`}</MultiLink>
      </LinkContainer>
      <Chat />
      {toastState && (
        <CopyMsgContainer>
          <CopyMsg />
        </CopyMsgContainer>
      )}

      {/* 이건 상태바 */}
      {/* <StateBarContainer>
        <StateBar>집중하는 중...</StateBar>
      </StateBarContainer> */}
    </Container>
  );
}

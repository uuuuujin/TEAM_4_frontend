import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { createRoomAsync, enterRoomAsync, chatMessageAsync, multiAction } from '../../store/modules/multi/multi.slice';
import { selectIsEntered, selectRoomId, selectIsConnected } from '../../store/modules/multi/multi.select';
import {
  TimerContainer,
  ChracterPosition,
  ButtonContainer,
  LinkContainer,
  GuidanceText,
  CopyMsgContainer,
  StateBarContainer,
} from './multi-mode.style';
import PomodoroTimer from '../../components/pomodoro-timer/pomodoro-timer.component';
import catImg from '../../assets/images/character_cat_150px.png';
import Character from '../../components/character/character.component';
import Button from '../../components/button/button.component';
import MultiLink from '../../components/multi-link/multi-link.component';
import ToastHook from '../../hooks/toast.hook';
import CopyMsg from '../../components/copy-message/copy-message.component';
import StateBar from '../../components/state-bar/state-bar.component';

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

  useEffect(() => {
    if (isConnected) {
      dispatch(
        chatMessageAsync({
          roomId,
          memberId: 126,
          content: '하아',
        })
      );
    }
  }, [dispatch, isConnected, roomId]);

  const users = [
    { nickname: '유진', characterImg: catImg },
    { nickname: '성훈', characterImg: catImg },
    { nickname: '은우', characterImg: catImg },
    { nickname: '현석', characterImg: catImg },
    { nickname: '보민', characterImg: catImg },
    { nickname: '유천', characterImg: catImg },
  ];

  const [toastState, setToastState] = useState<boolean>(false);
  ToastHook(toastState, setToastState);

  return (
    <div>
      {!isConnected && <Outlet />}
      <TimerContainer>
        <PomodoroTimer />
      </TimerContainer>
      {users.map((item, index) => {
        return (
          <ChracterPosition positionNum={index + 1}>
            <Character nickname={item.nickname} characterImgSrc={item.characterImg} />
          </ChracterPosition>
        );
      })}
      <ButtonContainer>
        <Button>시작하기</Button>
      </ButtonContainer>

      <GuidanceText>링크를 보내 친구들과 함꼐하자!</GuidanceText>
      <LinkContainer>
        <MultiLink setToastState={setToastState}>http://podongpodong.com/mode/friends/psa-hjjr-mwk</MultiLink>
      </LinkContainer>
      {toastState && (
        <CopyMsgContainer>
          <CopyMsg />
        </CopyMsgContainer>
      )}

      {/* 이건 상태바 */}
      {/* <StateBarContainer>
        <StateBar>집중하는 중...</StateBar>
      </StateBarContainer> */}
    </div>
  );
}

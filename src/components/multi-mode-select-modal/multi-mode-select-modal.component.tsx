import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Modal from '../modal/modal.component';
import ModeSelectButton from '../mode-select-button/mode-select-button.component';
import {
  MultiModeSelectModalContainer,
  MultiModeSelectModalContent,
  MultiModeSelectModalButtonContainer,
  ModeSelectImageWrap,
  ModeSelectImage,
} from './multi-mode-select-modal.style';

import MutliRandomButton from '../../assets/images/multi_random.png';
import MutliFriendButton from '../../assets/images/multi_friend.png';

import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { selectIsMultiModeSelectModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';

export default function MultiModeSelectModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMultiModeSelectModalOpen = useAppSelector(selectIsMultiModeSelectModalOpen);

  const handleFriendClick = () => {
    navigate('/multi/createRoom');
  };

  if (!isMultiModeSelectModalOpen) {
    return <div />;
  }
  return (
    <Modal
      title="멀티모드"
      onClose={() => {
        dispatch(modalAction.radioMultiModeSelectModal());
      }}
      contentWidth={664}
      backgroundColor="#FBFFD1"
    >
      <MultiModeSelectModalContainer>
        <MultiModeSelectModalContent>함께해야 제 맛 같이 한번 해볼까?</MultiModeSelectModalContent>
        <MultiModeSelectModalButtonContainer>
          <ModeSelectImageWrap>
            <ModeSelectImage alt="withRandomButton" src={`${process.env.REACT_APP_IMG_URL}/modal/multi_random.png`} />
          </ModeSelectImageWrap>
          <ModeSelectImageWrap onClick={handleFriendClick}>
            <ModeSelectImage alt="withFriendButton" src={`${process.env.REACT_APP_IMG_URL}/modal/multi_friend.png`} />
          </ModeSelectImageWrap>
        </MultiModeSelectModalButtonContainer>
      </MultiModeSelectModalContainer>
    </Modal>
  );
}

import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import ModeSelectButton from '../mode-select-button/mode-select-button.component';
import {
  MultiModeSelectModalContainer,
  MultiModeSelectModalTitle,
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
  const isMultiModeSelectModalOpen = useAppSelector(selectIsMultiModeSelectModalOpen);

  return (
    <Modal
      title=""
      isOpen={isMultiModeSelectModalOpen}
      onClose={() => {
        dispatch(modalAction.radioMultiModeSelectModal());
      }}
      contentWidth={664}
      backgroundColor="#FBFFD1"
    >
      <MultiModeSelectModalContainer>
        <MultiModeSelectModalTitle>멀티모드</MultiModeSelectModalTitle>
        <MultiModeSelectModalContent>함께해야 제 맛 같이 한번 해볼까?</MultiModeSelectModalContent>
        <MultiModeSelectModalButtonContainer>
          <ModeSelectImageWrap>
            <ModeSelectImage alt="withRandomButton" src={MutliRandomButton} />
          </ModeSelectImageWrap>
          <ModeSelectImageWrap>
            <ModeSelectImage alt="withFriendButton" src={MutliFriendButton} />
          </ModeSelectImageWrap>
        </MultiModeSelectModalButtonContainer>
      </MultiModeSelectModalContainer>
    </Modal>
  );
}

import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import ModeSelectButton from '../mode-select-button/mode-select-button.component';
import {
  MultiModeSelectModalContainer,
  MultiModeSelectModalTitle,
  MultiModeSelectModalContent,
  MultiModeSelectModalButtonContainer,
  ImgButton,
  Image,
} from './multi-mode-select-modal.style';
import MutliFriendButton from '../../assets/images/multi_mode_friend_button.png';
import MutliRandomButton from '../../assets/images/multi_mode_random_button.png';

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
      contentWidth={600}
    >
      <MultiModeSelectModalContainer>
        <MultiModeSelectModalTitle>멀티모드</MultiModeSelectModalTitle>
        <MultiModeSelectModalContent>함께해야 제 맛 같이 한번 해볼까?</MultiModeSelectModalContent>
        <MultiModeSelectModalButtonContainer>
          <ImgButton>
            <Image alt="withRandomButton" src={MutliRandomButton} />
          </ImgButton>
          <ImgButton>
            <Image alt="withFriendButton" src={MutliFriendButton} />
          </ImgButton>
          {/* <ModeSelectButton text="랜덤 매칭" subText="25분 집중 / 5분 휴식" />
          <ModeSelectButton text="친구랑 하기" subText="25분 집중 / 5분 휴식" /> */}
        </MultiModeSelectModalButtonContainer>
      </MultiModeSelectModalContainer>
    </Modal>
  );
}

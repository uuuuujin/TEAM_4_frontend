import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import ModeSelectButton from '../mode-select-button/mode-select-button.component';
import {
  MultiModeSelectModalContainer,
  MultiModeSelectModalTitle,
  MultiModeSelectModalContent,
  MultiModeSelectModalButtonContainer,
} from './multi-mode-select-modal.style';

export default function MultiModeSelectModal(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title=""
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(!isOpen);
      }}
      contentWidth={450}
    >
      <MultiModeSelectModalContainer>
        <MultiModeSelectModalTitle>멀티모드</MultiModeSelectModalTitle>
        <MultiModeSelectModalContent>{'함께해야 제 맛!\n같이 한번 해볼까?'}</MultiModeSelectModalContent>
        <MultiModeSelectModalButtonContainer>
          <ModeSelectButton text="랜덤 매칭" subText="25분 집중 / 5분 휴식" />
          <ModeSelectButton text="친구랑 하기" subText="25분 집중 / 5분 휴식" />
        </MultiModeSelectModalButtonContainer>
      </MultiModeSelectModalContainer>
    </Modal>
  );
}

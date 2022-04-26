import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import ModeSelectButton from '../mode-select-button/mode-select-button.component';
import {
  SingleModeSelectModalContainer,
  SingleModeSelectModalTitle,
  SingleModeSelectModalContent,
  SingleModeSelectModalButtonContainer,
} from './single-mode-select-modal.style';

export default function SingleModeSelectModal(): JSX.Element {
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
      <SingleModeSelectModalContainer>
        <SingleModeSelectModalTitle>싱글모드</SingleModeSelectModalTitle>
        <SingleModeSelectModalContent>{'홀로 강하게 키운다!\n오늘의 내가 갈 길은?'}</SingleModeSelectModalContent>
        <SingleModeSelectModalButtonContainer>
          <ModeSelectButton text="일반 뽀모" subText="25분 집중 / 5분 휴식" />
          <ModeSelectButton text="열정 뽀모" subText="50분 집중 / 10분 휴식" />
        </SingleModeSelectModalButtonContainer>
      </SingleModeSelectModalContainer>
    </Modal>
  );
}

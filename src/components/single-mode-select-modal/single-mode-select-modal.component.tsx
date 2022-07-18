import React from 'react';

import Modal from '../modal/modal.component';
import {
  SingleModeSelectModalContainer,
  SingleModeSelectModalContent,
  SingleModeSelectModalButtonContainer,
  ModeSelectImageWrap,
  ModeSelectImage,
} from './single-mode-select-modal.style';

import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { selectIsSingleModeSelectModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { timerAction } from '../../store/modules/timer/timer.slice';
import { PomodoroTimerTypes } from '../../store/modules/timer/timer.type';

export default function SingleModeSelectModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isSingleModeSelectModalOpen = useAppSelector(selectIsSingleModeSelectModalOpen);

  const handleEasyModal = () => {
    dispatch(timerAction.startSingleTimer(PomodoroTimerTypes.short_pomo));
    dispatch(modalAction.radioSingleModeSelectModal());
  };

  const handleHardModal = () => {
    dispatch(timerAction.startSingleTimer(PomodoroTimerTypes.long_pomo));
    dispatch(modalAction.radioSingleModeSelectModal());
  };

  if (!isSingleModeSelectModalOpen) {
    return <div />;
  }
  return (
    <Modal
      title="싱글모드"
      onClose={() => {
        dispatch(modalAction.radioSingleModeSelectModal());
      }}
      contentWidth={664}
      backgroundColor="#FFD7E7"
    >
      <SingleModeSelectModalContainer>
        <SingleModeSelectModalContent>{'홀로 강하게 키운다!\n오늘의 내가 갈 길은?'}</SingleModeSelectModalContent>
        <SingleModeSelectModalButtonContainer>
          <ModeSelectImageWrap to="/single">
            <ModeSelectImage
              alt="일반뽀모"
              src={`${process.env.REACT_APP_IMG_URL}/modal/single_normal.png`}
              onClick={handleEasyModal}
            />
          </ModeSelectImageWrap>
          <ModeSelectImageWrap to="/single">
            <ModeSelectImage
              alt="열정뽀모"
              src={`${process.env.REACT_APP_IMG_URL}/modal/single_hard.png`}
              onClick={handleHardModal}
            />
          </ModeSelectImageWrap>
        </SingleModeSelectModalButtonContainer>
      </SingleModeSelectModalContainer>
    </Modal>
  );
}

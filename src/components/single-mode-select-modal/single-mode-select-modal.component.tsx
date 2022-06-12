import React from 'react';

import Modal from '../modal/modal.component';
import {
  SingleModeSelectModalContainer,
  SingleModeSelectModalContent,
  SingleModeSelectModalButtonContainer,
  ModeSelectImageWrap,
  ModeSelectImage,
} from './single-mode-select-modal.style';

import SingleNormalImg from '../../assets/images/single_normal.png';
import SingleHardImg from '../../assets/images/single_hard.png';

import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { selectIsSingleModeSelectModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';

export default function SingleModeSelectModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isSingleModeSelectModalOpen = useAppSelector(selectIsSingleModeSelectModalOpen);

  const handleModal = () => {
    dispatch(modalAction.radioSingleModeSelectModal());
  };

  return (
    <Modal
      title="싱글모드"
      isOpen={isSingleModeSelectModalOpen}
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
            <ModeSelectImage alt="일반뽀모" src={SingleNormalImg} onClick={handleModal} />
          </ModeSelectImageWrap>
          <ModeSelectImageWrap to="/single">
            <ModeSelectImage alt="열정뽀모" src={SingleHardImg} />
          </ModeSelectImageWrap>
        </SingleModeSelectModalButtonContainer>
      </SingleModeSelectModalContainer>
    </Modal>
  );
}

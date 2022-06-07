import React from 'react';

import Modal from '../modal/modal.component';
import {
  SingleModeSelectModalContainer,
  SingleModeSelectModalTitle,
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

  return (
    <Modal
      title=""
      isOpen={isSingleModeSelectModalOpen}
      onClose={() => {
        dispatch(modalAction.radioSingleModeSelectModal());
      }}
      contentWidth={664}
      backgroundColor="#FFD7E7"
    >
      <SingleModeSelectModalContainer>
        <SingleModeSelectModalTitle>싱글모드</SingleModeSelectModalTitle>
        <SingleModeSelectModalContent>{'홀로 강하게 키운다!\n오늘의 내가 갈 길은?'}</SingleModeSelectModalContent>
        <SingleModeSelectModalButtonContainer>
          <ModeSelectImageWrap>
            <ModeSelectImage alt="일반뽀모" src={SingleNormalImg} />
          </ModeSelectImageWrap>
          <ModeSelectImageWrap>
            <ModeSelectImage alt="열정뽀모" src={SingleHardImg} />
          </ModeSelectImageWrap>
        </SingleModeSelectModalButtonContainer>
      </SingleModeSelectModalContainer>
    </Modal>
  );
}

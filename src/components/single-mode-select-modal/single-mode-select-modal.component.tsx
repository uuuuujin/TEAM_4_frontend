import React from 'react';

import Modal from '../modal/modal.component';
import {
  SingleModeSelectModalContainer,
  SingleModeSelectModalTitle,
  SingleModeSelectModalContent,
  SingleModeSelectModalButtonContainer,
  ImgButton,
  Image,
} from './single-mode-select-modal.style';
import MutliFriendButton from '../../assets/images/multi_mode_friend_button.png';
import MutliRandomButton from '../../assets/images/multi_mode_random_button.png';

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
      contentWidth={600}
    >
      <SingleModeSelectModalContainer>
        <SingleModeSelectModalTitle>싱글모드</SingleModeSelectModalTitle>
        <SingleModeSelectModalContent>{'홀로 강하게 키운다!\n오늘의 내가 갈 길은?'}</SingleModeSelectModalContent>
        <SingleModeSelectModalButtonContainer>
          <ImgButton>
            <Image alt="일반뽀모" src={MutliRandomButton} />
          </ImgButton>
          <ImgButton>
            <Image alt="열정뽀모" src={MutliFriendButton} />
          </ImgButton>
        </SingleModeSelectModalButtonContainer>
      </SingleModeSelectModalContainer>
    </Modal>
  );
}

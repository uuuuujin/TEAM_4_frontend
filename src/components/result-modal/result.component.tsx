import React from 'react';
import Modal from '../modal/modal.component';
import CombinedCharacter from '../character-combine/character-combine.component';
import { selectIsResultModalOpen } from '../../store/modules/modal/modal.select';
import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectTimerMode } from '../../store/modules/timer/timer.select';
import {
  ResultModalContainer,
  ButtonContainer,
  ResultButton,
  ResultButtonText,
  DownloadButtonText,
  ProfileModalBgImg,
  SingleCharacter,
} from './result.style';

import ShareButtonImg from '../../assets/images/share_button.png';
import ShareButtonHoverImg from '../../assets/images/share_button_hover.png';
import ShareButtonActiveImg from '../../assets/images/share_button_active.png';

import DownloadButtonImg from '../../assets/images/download_button.png';
import DownloadButtonHoverImg from '../../assets/images/download_button_hover.png';
import DownloadButtonActiveImg from '../../assets/images/download_button_active.png';

export interface ResultModalProp {
  characterImage: string;
}

export default function ResultModal({ characterImage }: ResultModalProp): JSX.Element {
  const dispatch = useAppDispatch();

  const isResultModalOpen = useAppSelector(selectIsResultModalOpen);
  const isTimerMode = useAppSelector(selectTimerMode);

  const closeModal = () => {
    dispatch(modalAction.radioResultModal());
  };

  const downloadImage = (imageUrl: string) => {
    fetch(imageUrl)
      .then((response) => {
        response.arrayBuffer().then((buffer) => {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'podongpodong_character.png');
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log('이미지 다운로드 실패', err);
      });
  };

  return (
    <Modal
      isOpen={isResultModalOpen}
      onClose={closeModal}
      contentWidth={440}
      title="뽀모합체!"
      backgroundColor="#E0FFD1"
      titleColor="#025a00"
    >
      <ResultModalContainer>
        <ProfileModalBgImg>
          {isTimerMode === 'single' && <SingleCharacter alt="profile" src={characterImage} />}
        </ProfileModalBgImg>

        <ButtonContainer>
          <ResultButton
            normalImg={DownloadButtonImg}
            hoverImg={DownloadButtonHoverImg}
            activeImg={DownloadButtonActiveImg}
            onClick={() => downloadImage(characterImage)}
          >
            <DownloadButtonText>저장하기</DownloadButtonText>
          </ResultButton>

          <ResultButton normalImg={ShareButtonImg} hoverImg={ShareButtonHoverImg} activeImg={ShareButtonActiveImg}>
            <ResultButtonText>공유하기</ResultButtonText>
          </ResultButton>
        </ButtonContainer>
      </ResultModalContainer>
    </Modal>
  );
}

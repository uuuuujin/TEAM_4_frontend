import React, { useState } from 'react';

import ProfileModal from '../profile-modal/profile-modal.component';
import { CharacterContainer, InvertedTriangleIcon, Nickname } from './character.style';
import InvertedTriangle from '../../assets/icons/caret-down-solid.svg';

interface CharacterType {
  nickname: string;
  characterImgSrc: string;
}

export default function Character({ nickname, characterImgSrc }: CharacterType): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handlerModal = () => {
    setModalOpen(true);
  };

  return (
    <CharacterContainer>
      <InvertedTriangleIcon src={InvertedTriangle} alt="역삼각형 아이콘" onClick={handlerModal} />
      <Nickname>{nickname}</Nickname>
      <img src={characterImgSrc} alt="캐릭터 이미지" />
      {modalOpen && (
        <ProfileModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          nickname={nickname}
          characterImgSrc={characterImgSrc}
        />
      )}
    </CharacterContainer>
  );
}

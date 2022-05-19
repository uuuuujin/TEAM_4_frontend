import React, { useState } from 'react';

import ProfileModal from '../profile-modal/profile-modal.component';
import {
  CharacterContainer,
  InvertedTriangleIcon,
  Nickname,
  CharacterWrap,
  ShelfImg,
  CharacterImg,
} from './character.style';
import InvertedTriangle from '../../assets/icons/caret-down-solid.svg';
import Shelf from '../../assets/images/shelf.png';

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
      <CharacterWrap>
        <ShelfImg>
          <img src={Shelf} alt="캐릭터 받침대" />
        </ShelfImg>
        <CharacterImg>
          <img src={characterImgSrc} alt="캐릭터 이미지" />
        </CharacterImg>
      </CharacterWrap>
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

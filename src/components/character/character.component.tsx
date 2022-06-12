import React, { useState } from 'react';

import ProfileModal from '../profile-modal/profile-modal.component';
import {
  CharacterContainer,
  TriangleIcon,
  Nickname,
  CharacterWrap,
  ShelfImgWrap,
  ShelfImg,
  CharacterImgWrap,
  CharacterImg,
} from './character.style';
import InvertedTriangle from '../../assets/icons/caret-down-solid.svg';
import ShelfDayImg from '../../assets/images/shelf_day.png';

interface CharacterType {
  nickname: string;
  characterImgSrc: string;
  triangleImgSrc?: string;
}

export default function Character({
  nickname,
  characterImgSrc,
  triangleImgSrc = InvertedTriangle,
}: CharacterType): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handlerModal = () => {
    setModalOpen(true);
  };

  return (
    <CharacterContainer>
      <TriangleIcon src={triangleImgSrc} alt="역삼각형 아이콘" />
      <Nickname>{nickname}</Nickname>
      <CharacterWrap>
        <ShelfImgWrap>
          <ShelfImg src={ShelfDayImg} alt="캐릭터 받침대" />
        </ShelfImgWrap>
        <CharacterImgWrap onClick={handlerModal}>
          <CharacterImg src={characterImgSrc} alt="캐릭터 이미지" />
        </CharacterImgWrap>
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

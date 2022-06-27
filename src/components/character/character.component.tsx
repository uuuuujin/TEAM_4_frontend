import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';

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
import { selectPomodoroTimerType } from '../../store/modules/timer/timer.select';
import { selectTriangleImgCode } from '../../store/modules/main/main.select';

interface CharacterType {
  nickname: string;
  characterImgSrc: string;
  // triangleImgSrc?: string;
}

export default function Character({
  nickname,
  characterImgSrc,
}: // triangleImgSrc = InvertedTriangle,
CharacterType): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const pomoTimerType = useAppSelector(selectPomodoroTimerType);
  const triangleImgCode = useAppSelector(selectTriangleImgCode);

  const handlerModal = () => {
    setModalOpen(true);
  };

  return (
    <CharacterContainer>
      <TriangleIcon
        src={`${process.env.REACT_APP_IMG_URL}/icons/arrow/0${triangleImgCode}.png`}
        alt="역삼각형 아이콘"
      />
      <Nickname>{nickname}</Nickname>
      <CharacterWrap>
        <ShelfImgWrap>
          <ShelfImg
            src={
              pomoTimerType === 'break' || pomoTimerType === 'long_break'
                ? `${process.env.REACT_APP_IMG_URL}/character/shelf_night.png`
                : `${process.env.REACT_APP_IMG_URL}/character/shelf_day.png`
            }
            alt="캐릭터 받침대"
          />
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

import { useAppSelector } from '../../hooks/index.hook';
import { selectPomodoroTimerType } from '../../store/modules/timer/timer.select';
import { selectTriangleImgCode } from '../../store/modules/main/main.select';

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

interface CharacterType {
  nickname: string;
  characterImgSrc: string;
}

export default function Character({ nickname, characterImgSrc }: CharacterType): JSX.Element {
  const pomoTimerType = useAppSelector(selectPomodoroTimerType);
  const triangleImgCode = useAppSelector(selectTriangleImgCode);

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
        <CharacterImgWrap>
          <CharacterImg src={characterImgSrc} alt="캐릭터 이미지" />
        </CharacterImgWrap>
      </CharacterWrap>
    </CharacterContainer>
  );
}

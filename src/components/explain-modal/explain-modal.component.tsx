import React, { useState } from 'react';
import Modal from '../modal/modal.component';
import {
  ButtonContainer,
  DescriptionImgContainer,
  DescriptionImg,
  LottieImage,
  DescriptionContainer,
  PageMoveButton,
} from './explain-modal.style';
import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { selectIsExplainModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';

import explainAnimation from '../../assets/images/explain_animation.json';

interface ContentType {
  imgSrc: string;
  description: JSX.Element;
}

export default function ExplainModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const isExplainModalOpen = useAppSelector(selectIsExplainModalOpen);
  const [page, setPage] = useState<number>(0);
  const nextPage = () => setPage((num) => num + 1);
  const previousPage = () => setPage((num) => num - 1);
  const closeModal = () => {
    dispatch(modalAction.radioExplainModal());
    setPage(0);
  };

  const content: ContentType[] = [
    {
      imgSrc: `${process.env.REACT_APP_IMG_URL}/modal/explain_pomodoro.png`,
      description: (
        <DescriptionContainer>
          <p>뽀모도로는 집중력 향상을 바라는 여러분을 위해,</p>
          <p>1980년대 후반 프란체스코 시릴로가 제안한 시간 관리 방법론이동!</p>
          <p>
            <span>25분 동안 무언가에 집중하고 5분 동안 쉬는 것을 4번 반복</span>
            하고,
          </p>
          <p>그 뒤에 30분간 쉬도록 시간을 배분한동!</p>
          <p>
            이 때, <span>[ 25분 집중하는 것 ]을 가리켜 &apos;1뽀모&apos;</span> 라고 한동!
          </p>
        </DescriptionContainer>
      ),
    },
    {
      imgSrc: '',
      description: (
        <DescriptionContainer>
          <p>우리 뽀모도로는 이렇게 할 수 있동!</p>
          <p>
            <span>1. 싱글모드 혹은 멀티모드를 선택</span>
          </p>
          <p>
            <span>2. 25분간 할 일에 집중</span>
          </p>
          <p>
            <span>3. 5분간 휴식</span>
          </p>
          <p>
            <span>4. 집중과 휴식을 4회 반복</span>
          </p>
        </DescriptionContainer>
      ),
    },
    {
      imgSrc: `${process.env.REACT_APP_IMG_URL}/modal/explain_character.png`,
      description: (
        <DescriptionContainer>
          <p>뽀모를 마치면 나만의 캐릭터를 얻을 수 있동!</p>
          <p>친구들과 함께해서 더 다양한 뽀모를 얻어보동!</p>
          <p className="fightingMsg">
            <span>그럼 모두들 화이팅이동!</span>
          </p>
        </DescriptionContainer>
      ),
    },
  ];

  return (
    <Modal
      isOpen={isExplainModalOpen}
      onClose={closeModal}
      title="뽀모도로란?"
      contentWidth={580}
      backgroundColor="#D9FDFF"
    >
      <div>
        <DescriptionImgContainer>
          {page !== 1 ? (
            <DescriptionImg bgImage={content[page].imgSrc} />
          ) : (
            <LottieImage animationData={explainAnimation} loop />
          )}
        </DescriptionImgContainer>
        {content[page].description}
        <ButtonContainer>
          <PageMoveButton
            normalImg="images/previous_button.png"
            activeImg="images/previous_button_active.png"
            buttonType="prev"
            clickDisabled={page === 0}
            onClick={previousPage}
          >
            이전
          </PageMoveButton>
          <PageMoveButton
            normalImg="images/next_button.png"
            activeImg="images/next_button_active.png"
            clickDisabled={page === 2}
            onClick={nextPage}
          >
            다음
          </PageMoveButton>
        </ButtonContainer>
      </div>
    </Modal>
  );
}

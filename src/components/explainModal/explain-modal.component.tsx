import React, { useState } from 'react';
import Modal from '../modal/modal.component';
import Button from '../button/button.component';
import { ImgContainer, ButtonContainer, DescriptionImg } from './explain-modal.style';

interface ContentType {
  title: string;
  imgSrc: any;
  description: string;
}

interface ModalProp {
  isOpen: boolean;
}

export default function ExplainModal({ isOpen }: ModalProp): JSX.Element {
  const content: ContentType[] = [
    {
      title: '뽀모도로',
      imgSrc: '',
      description:
        '뽀모도로 설명 뽀모도로 설명 뽀모도로 설명 뽀모도로 설명 뽀모도로 설명 뽀모도로 설명 뽀모도로 설명 뽀모도로 설명 뽀모도로 설명 뽀모도로 설명',
    },
    {
      title: '싱글모드',
      imgSrc: '',
      description:
        '싱글모드 설명 싱글모드 설명 싱글모드 설명 싱글모드 설명 싱글모드 설명 싱글모드 설명 싱글모드 설명 싱글모드 설명 싱글모드 설명 싱글모드 설명',
    },
    {
      title: '멀티모드',
      imgSrc: '',
      description:
        '멀티모드 설명 멀티모드 설명 멀티모드 설명 멀티모드 설명 멀티모드 설명 멀티모드 설명 멀티모드 설명 멀티모드 설명 멀티모드 설명 멀티모드 설명',
    },
  ];

  const [page, setPage] = useState<number>(0);
  const nextPage = () => setPage((num) => num + 1);
  const previousPage = () => setPage((num) => num - 1);

  return (
    <Modal isOpen={isOpen} onClose={() => {}} title={content[page].title} contentWidth={500}>
      <div>
        <ImgContainer>
          <DescriptionImg src={content[page].imgSrc} alt={`${content[page].title}설명 이미지가 들어가는 자리`} />
        </ImgContainer>
        <p>{content[page].description}</p>
        <ButtonContainer>
          <Button disabled={page === 0} onClick={previousPage}>
            이전
          </Button>
          <Button disabled={page === 2} onClick={nextPage}>
            다음
          </Button>
        </ButtonContainer>
      </div>
    </Modal>
  );
}

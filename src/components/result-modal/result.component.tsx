import React from 'react';
import Modal from '../modal/modal.component';
import Button from '../button/button.component';
import { ResultModalImgContainer, ButtonContainer } from './result.style';
import CombinedCharacter from '../character-combine/character-combine.component';

export interface ResultModalProp {
  isOpen: boolean;
  componentsArr: string[];
}

export default function ResultModal({ isOpen, componentsArr }: ResultModalProp): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={() => {}} contentWidth={500} title="뽀모도로 결과">
      <div>
        <ResultModalImgContainer>
          <CombinedCharacter {...componentsArr} />
        </ResultModalImgContainer>

        <ButtonContainer>
          <Button>이미지 저장하기</Button>
          <Button>이미지 공유하기</Button>
        </ButtonContainer>
      </div>
    </Modal>
  );
}

import React from 'react';

import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalHeader,
  CloseButton,
} from './modal.style';

import CloseBtnImg from '../../assets/images/close.png';
import CloseHoverBtnImg from '../../assets/images/close_hover.png';

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  contentWidth?: number;
  children: JSX.Element | string;
  footer?: JSX.Element | string;
  backgroundColor?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  backgroundColor = '#fff',
  contentWidth = 500,
}: ModalProp): JSX.Element {
  return (
    <ModalContainer className={isOpen ? 'show' : ''} onClick={onClose}>
      <ModalContent width={contentWidth} backgroundColor={backgroundColor} onClick={(e) => e.stopPropagation()}>
        {/* <ModalHeader>
          {title ? <ModalTitle>{title}</ModalTitle> : <div />}
          <CloseButton onClick={onClose}>&#x2715;</CloseButton>
         
        </ModalHeader> */}
        <CloseButton normalImg={CloseBtnImg} hoverImg={CloseHoverBtnImg} onClick={onClose} />
        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ModalContainer>
  );
}

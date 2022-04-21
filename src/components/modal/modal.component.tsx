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

interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element | string;
  footer?: JSX.Element | string;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProp): JSX.Element {
  return (
    <ModalContainer className={isOpen ? 'show' : ''} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&#x2715;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ModalContainer>
  );
}

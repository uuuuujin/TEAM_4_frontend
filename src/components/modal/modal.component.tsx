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

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  contentWidth?: number;
  children: JSX.Element | string;
  footer?: JSX.Element | string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  contentWidth = 500,
}: ModalProp): JSX.Element {
  return (
    <ModalContainer className={isOpen ? 'show' : ''} onClick={onClose}>
      <ModalContent width={contentWidth} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          {title ? <ModalTitle>{title}</ModalTitle> : <div />}
          <CloseButton onClick={onClose}>&#x2715;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ModalContainer>
  );
}

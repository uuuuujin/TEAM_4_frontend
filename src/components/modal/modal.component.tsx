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
  backgroundColor?: string;
  titleColor?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  titleColor = '#000',
  backgroundColor = '#fff',
  contentWidth = 500,
}: ModalProp): JSX.Element {
  return (
    <ModalContainer className={isOpen ? 'show' : ''} onClick={onClose}>
      <ModalContent width={contentWidth} backgroundColor={backgroundColor} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>{title ? <ModalTitle titleColor={titleColor}>{title}</ModalTitle> : <div />}</ModalHeader>
        <CloseButton onClick={onClose} />
        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ModalContainer>
  );
}

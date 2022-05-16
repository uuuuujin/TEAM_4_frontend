import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 5;

  &.show {
    opacity: 1;
    pointer-events: visible;
  }
`;

export const ModalContent = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  background-color: #fff;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ModalFooter = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
`;

export const ModalTitle = styled.div`
  margin: 0;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`;

export const ModalBody = styled.div`
  padding: 10px;
`;

export const CloseButton = styled.div`
  background-color: #fff;
  width: 1em;
`;

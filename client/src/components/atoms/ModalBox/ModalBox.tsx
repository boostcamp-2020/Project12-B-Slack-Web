import { color } from '@theme/index';
import React, { useRef } from 'react';
import styled from 'styled-components';

interface ModalBoxProps {
  children: React.ReactNode;
  onClick: () => void;
}

const BackgroundModal = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.modal_bg_outer_primary};
  z-index: 998;
`;

const InnerModal = styled.div<any>`
  padding: 2rem;
  background-color: ${color.modal_bg_inner_primary};
  z-index: 999;
  border-radius: 1rem;
`;

const ModalBox: React.FC<ModalBoxProps> = ({ children, onClick, ...props }) => {
  const BackgroundModalRef = useRef();

  const handlingBackgroundModalClick = (e: any) => {
    if (e.target === BackgroundModalRef.current) {
      onClick();
    }
  };

  return (
    <BackgroundModal ref={BackgroundModalRef} onClick={handlingBackgroundModalClick} {...props}>
      <InnerModal>{children}</InnerModal>
    </BackgroundModal>
  );
};

export { ModalBox, ModalBoxProps };

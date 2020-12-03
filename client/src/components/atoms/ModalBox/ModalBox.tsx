import { color } from '@theme/index';
import React from 'react';
import styled from 'styled-components';

interface ModalBoxProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BackgroundModal = styled.div<any>`
  position: fixed;
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
  return (
    <BackgroundModal onClick={onClick} {...props}>
      <InnerModal>{children}</InnerModal>
    </BackgroundModal>
  );
};

export { ModalBox, ModalBoxProps };

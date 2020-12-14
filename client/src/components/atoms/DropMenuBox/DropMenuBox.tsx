import React, { useEffect, useRef, useState } from 'react';
import { color } from '@theme/index';
import styled from 'styled-components';

interface DropMenuBoxProps {
  children: React.ReactNode;
  x?: number;
  y?: number;
  onClick?: () => void;
}

const BackgroundModal = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: none;
  z-index: 998;
`;

const InnerModal = styled.div<any>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  background-color: ${color.modal_bg_inner_secondary};
  z-index: 999;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgb(248 248 248), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  height: fit-content;
`;

const DropMenuBox: React.FC<DropMenuBoxProps> = ({ children, x = 0, y = 0, onClick, ...props }) => {
  const innerModalRef = useRef<HTMLDivElement>();
  const offset = -10;
  const [nx, setNx] = useState(x);
  const [ny, setNy] = useState(y);
  useEffect(() => {
    const clientWidth = Number(innerModalRef.current?.clientWidth);
    const clientHeight = Number(innerModalRef.current?.clientHeight);
    const { innerWidth, innerHeight } = window;
    if (x + clientWidth >= innerWidth) setNx(innerWidth - clientWidth + offset);
    if (y + clientHeight >= innerHeight) setNy(innerHeight - clientHeight + offset);
  }, [x, y]);
  return (
    <>
      <BackgroundModal onClick={onClick} {...props}></BackgroundModal>
      <InnerModal ref={innerModalRef} x={nx} y={ny}>
        {children}
      </InnerModal>
    </>
  );
};

export { DropMenuBox, DropMenuBoxProps };

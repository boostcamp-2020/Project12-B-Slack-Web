import React from 'react';
import styled from 'styled-components';
import { LogoImg } from '@components/atoms';
import { ActiveProfileImg } from '@components/molecules';

interface HeaderProps {
  src: string;
}

const HeaderContainter = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  min-height: 6%;
  background-color: black;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
`;

const Header: React.FC<HeaderProps> = ({ src, ...props }) => {
  return (
    <HeaderContainter {...props}>
      <LogoImg />
      <ActiveProfileImg src={src} isHover={true} />
    </HeaderContainter>
  );
};

export { Header, HeaderProps };

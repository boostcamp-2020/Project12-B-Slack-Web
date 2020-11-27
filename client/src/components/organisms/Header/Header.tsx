import React from 'react';
import styled from 'styled-components';
import { ActiveProfileImg } from '@components/molecules';
import LogoText from '@imgs/logo-text.png';

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

const LogoImg = styled.img<any>`
  height: 2.4rem;
  margin-bottom: -0.2rem;
  cursor: pointer;
`;

const Header: React.FC<HeaderProps> = ({ src, ...props }) => {
  return (
    <HeaderContainter {...props}>
      <LogoImg src={LogoText} />
      <ActiveProfileImg src={src} isHover={true} />
    </HeaderContainter>
  );
};

export { Header, HeaderProps };

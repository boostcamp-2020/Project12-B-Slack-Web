import React from 'react';
import styled from 'styled-components';
import { ActiveProfileImg } from '@components/molecules';
import LogoText from '@imgs/logo-text.png';

interface HeaderProps {}

const HeaderContainter = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  height: 2.4rem;
  background-color: black;
`;

const LogoImg = styled.img<any>`
  height: 2.4rem;
  margin-bottom: -0.2rem;
  cursor: pointer;
`;

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <HeaderContainter {...props}>
      <LogoImg src={LogoText} />
      <ActiveProfileImg isHover={true} />
    </HeaderContainter>
  );
};

export { Header, HeaderProps };

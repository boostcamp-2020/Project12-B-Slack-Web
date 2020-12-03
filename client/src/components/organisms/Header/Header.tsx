import React from 'react';
import styled from 'styled-components';
import { LogoImg } from '@components/atoms';
import { ActiveProfileImg } from '@components/molecules';
import { color } from '@theme/index';

interface HeaderProps {
  profileUri?: string;
}

const HeaderContainter = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  min-height: 6%;
  background-color: ${color.primary};
  box-shadow: 0 1px 0 0 ${color.box_shadow_tertiary};
`;

const Header: React.FC<HeaderProps> = ({ profileUri, ...props }) => {
  return (
    <HeaderContainter {...props}>
      <LogoImg />
      <ActiveProfileImg src={profileUri} isHover={true} />
    </HeaderContainter>
  );
};

export { Header, HeaderProps };

import React from 'react';
import styled from 'styled-components';
import LogoText from '@imgs/logo-text.png';
import { Size, Sizes } from '@constants/index';

interface LogoImgProps {
  size?: Sizes;
}

const StyledLogoImg = styled.img<LogoImgProps>`
  height: ${({ size }) => (size === Size.SMALL ? '2.4rem' : '5rem')};
  margin-bottom: -0.2rem;
  cursor: pointer;
`;

const LogoImg: React.FC<LogoImgProps> = ({ size = Size.SMALL, ...props }) => {
  return <StyledLogoImg alt="#" src={LogoText} size={size} {...props} />;
};

export { LogoImg, LogoImgProps };

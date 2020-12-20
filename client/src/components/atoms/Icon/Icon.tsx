import React from 'react';
import styled from 'styled-components';
import { Size, Sizes } from '@constants/index';

interface IconProps {
  size?: Sizes;
  isHover?: boolean;
  src?: string;
  isSelect?: boolean;
}

const IconContainter = styled.div<IconProps>`
  width: ${({ size }) => {
    if (size === Size.LARGE) return '1.5rem';
    if (size === Size.MEDIUM) return '1.3rem';
    return '0.8rem';
  }};
  height: ${({ size }) => {
    if (size === Size.LARGE) return '1.5rem';
    if (size === Size.MEDIUM) return '1.3rem';
    return '0.8rem';
  }};
`;

const Img = styled.img<IconProps>`
  width: 100%;
  height: 100%;
  ${({ isHover }) => (isHover ? '&:hover { opacity: .5; };' : '')}
  ${({ isSelect }) => (isSelect ? 'filter: brightness(1.25);' : '')}
`;

const Icon: React.FC<IconProps> = ({ size = Size.MEDIUM, isSelect = false, isHover = true, src = '', ...props }) => {
  return (
    <IconContainter size={size} isHover={isHover} {...props}>
      <Img alt="#" isSelect={isSelect} isHover={isHover} src={src}></Img>
    </IconContainter>
  );
};

export { Icon, IconProps };

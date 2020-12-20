/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/atoms';
import { color } from '@theme/index';
import { Sizes, Size } from '@constants/index';

interface HoverIconProps {
  size: Sizes;
  src?: string;
  onClick?: any;
}

const StyledHoverIcon = styled.div<HoverIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => {
    if (size === Size.LARGE) return '2.4rem';
    if (size === Size.MEDIUM) return '2.0rem';
    return '1.8rem';
  }};
  height: ${({ size }) => {
    if (size === Size.LARGE) return '2.4rem';
    if (size === Size.MEDIUM) return '2.0rem';
    return '1.8rem';
  }};
  border-radius: 0.4rem;
  cursor: pointer;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const HoverIcon: React.FC<HoverIconProps> = ({ size = Size.MEDIUM, src, ...props }) => {
  return (
    <StyledHoverIcon size={size} {...props}>
      <Icon size={size} src={src} isHover />
    </StyledHoverIcon>
  );
};

export { HoverIcon, HoverIconProps };

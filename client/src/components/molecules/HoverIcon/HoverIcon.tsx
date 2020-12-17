/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/atoms';
import { color } from '@theme/index';

interface HoverIconProps {
  size: 'small' | 'medium' | 'large';
  src?: string;
  onClick?: any;
}

const StyledHoverIcon = styled.div<HoverIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    if (props.size === 'large') return '2.4rem';
    if (props.size === 'medium') return '2.0rem';
    return '1.8rem';
  }};
  height: ${(props) => {
    if (props.size === 'large') return '2.4rem';
    if (props.size === 'medium') return '2.0rem';
    return '1.8rem';
  }};
  border-radius: 0.4rem;
  cursor: pointer;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const HoverIcon: React.FC<HoverIconProps> = ({ size = 'medium', src, ...props }) => {
  return (
    <StyledHoverIcon size={size} {...props}>
      <Icon size={size} src={src} isHover />
    </StyledHoverIcon>
  );
};

export { HoverIcon, HoverIconProps };

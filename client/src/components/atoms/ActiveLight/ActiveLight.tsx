import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { Size, Sizes } from '@constants/index';

interface ActiveLightProps {
  size?: Sizes;
  isActive?: boolean;
}

const ActiveLightContainter = styled.div<ActiveLightProps>`
  width: ${({ size }) => {
    if (size === Size.LARGE) return '0.5rem';
    if (size === Size.MEDIUM) return '0.4rem';
    return '0.3rem';
  }};
  height: ${({ size }) => {
    if (size === Size.LARGE) return '0.5rem';
    if (size === Size.MEDIUM) return '0.4rem';
    return '0.3rem';
  }};
  border-width: ${({ size }) => {
    if (size === Size.LARGE) return '0.17rem';
    if (size === Size.MEDIUM) return '0.13rem';
    return '0.1rem';
  }};
  border-color: ${({ isActive }) => (isActive ? color.light_primary : color.border_secondary)};
  border-style: solid;
  border-radius: 1rem;
  background-color: ${({ isActive }) => (isActive ? color.light_primary : color.primary)};
`;

const ActiveLight: React.FC<ActiveLightProps> = ({ size = Size.MEDIUM, isActive = true, ...props }) => {
  return <ActiveLightContainter size={size} isActive={isActive} {...props} />;
};

export { ActiveLight, ActiveLightProps };

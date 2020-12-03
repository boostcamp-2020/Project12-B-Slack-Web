import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';

interface ActiveLightProps {
  size?: 'small' | 'medium' | 'large';
  isActive?: boolean;
}

const ActiveLightContainter = styled.div<ActiveLightProps>`
  width: ${(props) => {
    if (props.size === 'large') return '0.5rem';
    if (props.size === 'medium') return '0.4rem';
    return '0.3rem';
  }};
  height: ${(props) => {
    if (props.size === 'large') return '0.5rem';
    if (props.size === 'medium') return '0.4rem';
    return '0.3rem';
  }};
  border-width: ${(props) => {
    if (props.size === 'large') return '0.17rem';
    if (props.size === 'medium') return '0.13rem';
    return '0.1rem';
  }};
  border-color: ${(props) => (props.isActive ? color.light_primary : color.border_secondary)};
  border-style: solid;
  border-radius: 1rem;
  background-color: ${(props) => (props.isActive ? color.light_primary : color.primary)};
`;

const ActiveLight: React.FC<ActiveLightProps> = ({ size = 'medium', isActive = true, ...props }) => {
  return <ActiveLightContainter size={size} isActive={isActive} {...props} />;
};

export { ActiveLight, ActiveLightProps };

import React from 'react';
import styled from 'styled-components';

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
  border-color: ${(props) => (props.isActive ? '#33e600' : '#c6c6c7')};
  border-style: solid;
  border-radius: 1rem;
  background-color: ${(props) => (props.isActive ? '#33e600' : 'black')};
`;

const ActiveLight: React.FC<ActiveLightProps> = ({ size = 'medium', isActive = true, ...props }) => {
  return <ActiveLightContainter size={size} isActive={isActive} {...props} />;
};

export { ActiveLight, ActiveLightProps };

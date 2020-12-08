import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/atoms';
import { color } from '@theme/index';

interface HoverIconProps {
  size: 'medium' | 'large';
  src?: string;
}

const StyledHoverIcon = styled.div<HoverIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size === 'large' ? '2.4rem' : '2.0rem')};
  height: ${(props) => (props.size === 'large' ? '2.4rem' : '2.0rem')};
  border-radius: 0.4rem;
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

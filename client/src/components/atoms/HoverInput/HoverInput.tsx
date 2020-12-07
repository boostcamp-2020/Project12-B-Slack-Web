import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';

interface HoverInputProps {
  placeholder?: string;
}

const StyledHoverInput = styled.input<any>`
  padding: 0rem 2%;
  width: 96%;
  height: 2.5rem;
  font-size: 1rem;
  outline: none;
  border: 1px solid ${color.primary};
  border-radius: 0.3rem;

  &:focus {
    box-shadow: inset 0 1px 2px ${color.box_shadow_primary}, 0 0 0 3px ${color.box_shadow_secondary};
    containerStyle.border = 1px solid ${color.primary};
  }
`;

const HoverInput: React.FC<HoverInputProps> = ({ placeholder, ...props }) => {
  return <StyledHoverInput placeholder={placeholder} {...props} />;
};

export { HoverInput, HoverInputProps };

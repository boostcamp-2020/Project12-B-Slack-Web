import React from 'react';
import styled from 'styled-components';

interface HoverInputProps {
  placeholder?: string;
}

const StyledHoverInput = styled.input<any>`
  padding: 0rem 2%;
  width: 96%;
  height: 2.5rem;
  font-size: 1rem;
  outline: none;
  border: 1px solid black;
  border-radius: 0.3rem;

  &:focus {
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 3px rgba(3, 102, 214, 0.3);
    containerStyle.border = 1px solid black;
  }
`;

const HoverInput: React.FC<HoverInputProps> = ({ placeholder, ...props }) => {
  return <StyledHoverInput placeholder={placeholder} {...props} />;
};

export { HoverInput, HoverInputProps };

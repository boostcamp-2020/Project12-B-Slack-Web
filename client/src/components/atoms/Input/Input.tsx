import React from 'react';
import styled from 'styled-components';

interface InputProps {
  title?: string;
  isThread?: boolean;
}

const StyledInput = styled.input<any>`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
`;

const Input: React.FC<InputProps> = ({ title, isThread = false, ...props }) => {
  return <StyledInput placeholder={isThread ? 'Reply...' : `Send a message to #${title}`} {...props} />;
};

export { Input, InputProps };

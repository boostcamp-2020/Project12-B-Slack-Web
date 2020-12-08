import React from 'react';
import styled from 'styled-components';

interface InputProps {
  title?: string;
  isThread?: boolean;
  content: string;
  setContent: any;
}

const StyledInput = styled.input<any>`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
`;

const Input: React.FC<InputProps> = ({ title, isThread = false, content, setContent, ...props }) => {
  const handlingChange = (e: any) => {
    setContent(e.target.value);
  };
  return <StyledInput placeholder={isThread ? 'Reply...' : `Send a message to #${title}`} value={content} onChange={handlingChange} {...props} />;
};

export { Input, InputProps };

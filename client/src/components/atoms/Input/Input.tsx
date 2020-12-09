import React from 'react';
import styled from 'styled-components';

const ENTER_KEYCODE = 13;

interface InputProps {
  title?: string;
  isThread?: boolean;
  content: string;
  setContent: any;
  keyPressEnter: any;
}

const StyledInput = styled.input<any>`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
`;

const Input: React.FC<InputProps> = ({ title, isThread = false, content, setContent, keyPressEnter, ...props }) => {
  const handlingKeyPressEnter = (e: any) => {
    if (e.charCode === ENTER_KEYCODE) keyPressEnter(e.target.value);
  };
  const handlingChange = (e: any) => {
    setContent(e.target.value);
  };
  return (
    <StyledInput
      placeholder={isThread ? 'Reply...' : `Send a message to #${title}`}
      value={content}
      onKeyPress={handlingKeyPressEnter}
      onChange={handlingChange}
      {...props}
    />
  );
};

export { Input, InputProps };

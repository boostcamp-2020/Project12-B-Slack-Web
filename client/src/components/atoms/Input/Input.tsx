import React from 'react';
import styled from 'styled-components';
import { KeyCode } from '@constants/index';

interface InputProps {
  title?: string;
  id: string;
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
  :placeholder-shown {
    text-overflow: ellipsis;
  }
`;

const Input: React.FC<InputProps> = ({ id, title, isThread = false, content, setContent, keyPressEnter, ...props }) => {
  const handlingKeyPressEnter = (e: any) => {
    if (e.charCode === KeyCode.ENTER) keyPressEnter(e.target.value);
  };
  const handlingChange = (e: any) => {
    setContent(e.target.value);
  };
  return (
    <StyledInput
      id={id}
      placeholder={isThread ? 'Reply...' : `Send a message to #${title}`}
      value={content}
      onKeyPress={handlingKeyPressEnter}
      onChange={handlingChange}
      {...props}
    />
  );
};

export { Input, InputProps };

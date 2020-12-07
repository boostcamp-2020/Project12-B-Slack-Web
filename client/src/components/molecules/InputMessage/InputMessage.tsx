import React from 'react';
import styled from 'styled-components';
import { Input } from '@components/atoms';
import { SendMessageButton } from '@components/molecules';
import { color } from '@theme/index';

interface InputMessageProps {
  isThread?: boolean;
  title: string;
}

const InputMessageContainer = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${color.primary};
  padding: 0.5rem 0rem;
  width: 100%;
  max-height: 70%;
  border-radius: 0.3rem;
`;

const InputWrap = styled.div<any>`
  margin-left: 1rem;
  width: 70%;
`;

const ButtonWrap = styled.div<any>`
  margin-right: 1rem;
`;

const InputMessage: React.FC<InputMessageProps> = ({ children, title, isThread, ...props }) => {
  return (
    <InputMessageContainer {...props}>
      <InputWrap>
        <Input isThread={isThread} title={title} />
      </InputWrap>
      <ButtonWrap>
        <SendMessageButton isActive={true} />
      </ButtonWrap>
    </InputMessageContainer>
  );
};

export { InputMessage, InputMessageProps };

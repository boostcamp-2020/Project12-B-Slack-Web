import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@components/atoms';
import { SendMessageButton } from '@components/molecules';
import { color } from '@theme/index';
import { createMessage } from '@socket/emits/message';
import { ChatType, ScrollEventType } from '@constants/index';

interface InputMessageProps {
  isThread?: boolean;
  title: string;
  setEventType: any;
  chatroomId: number;
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

const InputMessage: React.FC<InputMessageProps> = ({ children, title, isThread, chatroomId, setEventType, ...props }) => {
  const [content, setContent] = useState('');

  const sendMessage = () => {
    if (content === '') return;
    setEventType(ScrollEventType.INPUTTEXT);
    createMessage({ content, chatroomId });
    setContent('');
  };

  return (
    <InputMessageContainer {...props}>
      <InputWrap>
        <Input id={ChatType.Message} isThread={isThread} title={title} content={content} keyPressEnter={sendMessage} setContent={setContent} />
      </InputWrap>
      <ButtonWrap>
        <SendMessageButton isActive={true} sendMessage={sendMessage} />
      </ButtonWrap>
    </InputMessageContainer>
  );
};

export { InputMessage, InputMessageProps };

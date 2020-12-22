import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@components/atoms';
import { color } from '@theme/index';
import { SendMessageButton } from '@components/molecules';
import { createReply } from '@socket/emits/thread';
import { ScrollEventType, ChatType } from '@constants/index';

interface InputReplyProps {
  isThread?: boolean;
  messageId: number | null;
  setEventType: any;
}

const InputReplyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${color.primary};
  padding: 0.5rem 0rem;
  width: 100%;
  max-height: 70%;
  border-radius: 0.3rem;
`;

const InputWrap = styled.div`
  margin-left: 1rem;
  width: 70%;
`;

const ButtonWrap = styled.div`
  margin-right: 1rem;
`;

const InputReply: React.FC<InputReplyProps> = ({ children, messageId, isThread, setEventType, ...props }) => {
  const [content, setContent] = useState('');
  const sendReply = () => {
    if (content === '') return;
    setEventType(ScrollEventType.INPUTTEXT);
    createReply({ content, messageId });
    setContent('');
  };

  return (
    <InputReplyContainer {...props}>
      <InputWrap>
        <Input id={ChatType.Reply} isThread={isThread} content={content} keyPressEnter={sendReply} setContent={setContent} />
      </InputWrap>
      <ButtonWrap>
        <SendMessageButton sendMessage={sendReply} isActive />
      </ButtonWrap>
    </InputReplyContainer>
  );
};

export { InputReply, InputReplyProps };

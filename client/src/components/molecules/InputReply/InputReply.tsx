import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@components/atoms';
import { color } from '@theme/index';
import { SendMessageButton } from '@components/molecules';
import { createReply } from '@socket/emits/thread';

interface InputReplyProps {
  isThread?: boolean;
  messageId: number | null;
}

const InputReplyContainer = styled.div<any>`
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

const InputReply: React.FC<InputReplyProps> = ({ children, messageId, isThread, ...props }) => {
  const [content, setContent] = useState('');
  const sendReply = () => {
    if (content === '') return;
    createReply({ content, messageId });
    setContent('');
  };

  return (
    <InputReplyContainer {...props}>
      <InputWrap>
        <Input isThread={isThread} content={content} keyPressEnter={sendReply} setContent={setContent} />
      </InputWrap>
      <ButtonWrap>
        <SendMessageButton sendMessage={sendReply} isActive />
      </ButtonWrap>
    </InputReplyContainer>
  );
};

export { InputReply, InputReplyProps };

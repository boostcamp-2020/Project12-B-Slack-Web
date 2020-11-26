import React from 'react';
import styled from 'styled-components';
import { InputMessage } from '@components/molecules';

interface ChatroomBodyProps {
  children: React.ReactNode;
  title: string;
}

const ChatroomBodyContainter = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 90%;
`;

const InputMessageWrap = styled.div<any>`
  margin: 1rem;
`;

const ChatroomBody: React.FC<ChatroomBodyProps> = ({ title, children, ...props }) => {
  return (
    <ChatroomBodyContainter {...props}>
      <InputMessageWrap>
        <InputMessage title={title} />
      </InputMessageWrap>
    </ChatroomBodyContainter>
  );
};

export { ChatroomBody, ChatroomBodyProps };

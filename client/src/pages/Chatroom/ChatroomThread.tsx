import React from 'react';
import styled from 'styled-components';
import { Chatroom, Thread } from '@pages/index';

interface ChatroomProps {
  children: React.ReactNode;
}

const ChatroomThreadContainer = styled.div<any>`
  display: flex;
  height: 100%;
`;

const ChatroomThread: React.FC<ChatroomProps> = () => {
  return (
    <ChatroomThreadContainer>
      <Chatroom />
      <Thread />
    </ChatroomThreadContainer>
  );
};

export { ChatroomThread };

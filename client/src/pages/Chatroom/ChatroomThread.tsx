import React from 'react';
import styled from 'styled-components';
import { Chatroom } from '@pages/index';

interface ChatroomProps {
  children: React.ReactNode;
}

const ChatroomThreadContainer = styled.div<any>`
  height: 100%;
`;

const ChatroomThread: React.FC<ChatroomProps> = ({ children, ...props }) => {
  return (
    <ChatroomThreadContainer>
      <Chatroom />
    </ChatroomThreadContainer>
  );
};

export { ChatroomThread };

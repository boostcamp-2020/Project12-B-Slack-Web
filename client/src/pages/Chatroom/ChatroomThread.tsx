import React from 'react';
import styled from 'styled-components';
import { Chatroom, Thread } from '@pages/index';

interface ChatroomProps {}

const ChatroomThreadContainer = styled.div<any>`
  display: flex;
  height: 100%;
`;

const ChatroomThread: React.FC<ChatroomProps> = ({ ...props }) => {
  return (
    <ChatroomThreadContainer>
      <Chatroom {...props} />
      <Thread {...props} />
    </ChatroomThreadContainer>
  );
};

export { ChatroomThread };

import React from 'react';
import styled from 'styled-components';
import { Chatroom, Thread } from '@pages/index';
import { RouteComponentProps } from 'react-router-dom';

interface ChatroomThreadProps {}

const ChatroomThreadContainer = styled.div<any>`
  display: flex;
  height: 100%;
`;

const ChatroomThread: React.FC<ChatroomThreadProps & RouteComponentProps> = ({ ...props }) => {
  return (
    <ChatroomThreadContainer>
      <Chatroom width="65%" {...props} />
      <Thread {...props} />
    </ChatroomThreadContainer>
  );
};

export { ChatroomThread };

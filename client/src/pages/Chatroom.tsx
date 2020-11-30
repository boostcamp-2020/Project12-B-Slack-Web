import React from 'react';
import styled from 'styled-components';
import { ChatroomHeader, ChatroomBody } from '@components/organisms';

interface ChatroomProps {
  children: React.ReactNode;
  title: string;
}

const ChatroomContainer = styled.div<any>`
  height: 100%;
`;

const Chatroom: React.FC<ChatroomProps> = ({ title = '5주-그룹-프로젝트-슬랙b', children, ...props }) => {
  return (
    <ChatroomContainer {...props}>
      <ChatroomHeader title={title}>{}</ChatroomHeader>
      <ChatroomBody title={title}>{}</ChatroomBody>
    </ChatroomContainer>
  );
};

export { Chatroom };

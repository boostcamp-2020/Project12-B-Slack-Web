import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getChatroomInfo } from '@dispatch/index';
import { ChatroomHeader, ChatroomBody } from '@components/organisms';

interface ChatroomProps {
  children: React.ReactNode;
  title: string;
  selectedChatroomId: number;
}

const ChatroomContainer = styled.div<any>`
  height: 100%;
`;

const Chatroom: React.FC<ChatroomProps> = ({ title, selectedChatroomId, children, ...props }) => {
  useEffect(() => {
    getChatroomInfo(selectedChatroomId);
  }, []);
  return (
    <ChatroomContainer {...props}>
      <ChatroomHeader title={title}>{}</ChatroomHeader>
      <ChatroomBody title={title}>{}</ChatroomBody>
    </ChatroomContainer>
  );
};

export { Chatroom };

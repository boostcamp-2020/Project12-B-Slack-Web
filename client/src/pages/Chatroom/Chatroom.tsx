import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChatroomHeader, ChatroomBody } from '@components/organisms';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers/index';
import { insertMessage, loadAsync } from '@store/actions/chatroom-action';
import socket from '@socket/socketIO';

interface ChatroomProps {}

const ChatroomContainer = styled.div<any>`
  height: 100%;
`;

const Chatroom: React.FC<ChatroomProps> = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const { selectedChatroomId, selectedChatroom, messages } = useSelector((store: RootState) => store.chatroom);
  const { title, users } = selectedChatroom;

  useEffect(() => {
    dispatch(loadAsync({ selectedChatroomId }));
    socket.on('create message', (message: any) => {
      dispatch(insertMessage(message));
    });
  }, []);

  return (
    <ChatroomContainer {...props}>
      <ChatroomHeader title={title} users={users} />
      <ChatroomBody title={title} messages={messages} chatRoomId={selectedChatroomId} />
    </ChatroomContainer>
  );
};

export { Chatroom };

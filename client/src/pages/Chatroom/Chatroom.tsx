import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChatroomHeader, ChatroomBody } from '@components/organisms';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers/index';
import { loadAsync } from '@store/actions/chatroom-action';

interface ChatroomProps {
  children: React.ReactNode;
}

const ChatroomContainer = styled.div<any>`
  height: 100%;
`;

const Chatroom: React.FC<ChatroomProps> = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const { selectedChatroomId, selectedChatroom, messages } = useSelector((store: RootState) => store.chatroom);
  const { title } = selectedChatroom;

  useEffect(() => {
    dispatch(loadAsync({ selectedChatroomId }));
  }, []);

  return (
    <ChatroomContainer {...props}>
      <ChatroomHeader title={title} />
      <ChatroomBody title={title} messages={messages} chatRoomId={selectedChatroomId} />
    </ChatroomContainer>
  );
};

export { Chatroom };

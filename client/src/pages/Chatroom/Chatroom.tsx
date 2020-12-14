import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChatroomHeader, ChatroomBody } from '@components/organisms';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers/index';
import { loadAsync } from '@store/actions/chatroom-action';

interface ChatroomProps {}

const ChatroomContainer = styled.div<any>`
  height: 100%;
  width: -webkit-fill-available;
`;

const Chatroom: React.FC<ChatroomProps> = () => {
  const dispatch = useDispatch();
  const { selectedChatroomId, selectedChatroom, messages } = useSelector((store: RootState) => store.chatroom);
  const { title, users } = selectedChatroom;
  useEffect(() => {
    if (selectedChatroomId !== null) dispatch(loadAsync({ selectedChatroomId }));
  }, []);

  return (
    <ChatroomContainer>
      <ChatroomHeader title={title} users={users} />
      <ChatroomBody title={title} messages={messages} chatRoomId={selectedChatroomId} />
    </ChatroomContainer>
  );
};

export { Chatroom };

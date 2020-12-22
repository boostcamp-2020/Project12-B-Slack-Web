import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChatroomHeader, ChatroomBody } from '@components/organisms';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers/index';
import { loadAsync } from '@store/actions/chatroom-action';
import { RouteComponentProps } from 'react-router-dom';

interface ChatroomProps {
  width?: string;
}

const ChatroomContainer = styled.div<ChatroomProps>`
  height: 100%;
  width: ${(props) => props.width || '100%'};
  min-width: 35rem;
`;

const Chatroom: React.FC<ChatroomProps & RouteComponentProps> = ({ width }) => {
  const dispatch = useDispatch();
  const { selectedChatroomId, selectedChatroom, messages } = useSelector((store: RootState) => store.chatroom);
  const { title, users } = selectedChatroom;
  useEffect(() => {
    if (selectedChatroomId !== null) dispatch(loadAsync({ selectedChatroomId }));
  }, [selectedChatroomId]);

  return (
    <ChatroomContainer width={width}>
      <ChatroomHeader title={title} users={users} />
      <ChatroomBody title={title} messages={messages} chatroomId={selectedChatroomId} />
    </ChatroomContainer>
  );
};

export { Chatroom };

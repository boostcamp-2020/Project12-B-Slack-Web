import React from 'react';
import styled from 'styled-components';
import { InputMessage, Message } from '@components/molecules';

interface ChatroomBodyProps {
  title: string;
  messages: Array<object>;
  chatRoomId: number | null;
}

const ChatroomBodyContainter = styled.div<any>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 90%;
`;

const InputMessageWrap = styled.div<any>`
  padding-top: 1rem;
  overflow-y: scroll;
`;

const InputBoxWrap = styled.div<any>`
  margin: 1rem;
`;

const ChatroomBody: React.FC<ChatroomBodyProps> = ({ title, messages, chatRoomId, ...props }) => {
  const createMessages = () => {
    return messages.map((message: any) => (
      <Message key={message.messageId} author={message.user.displayName} content={message.content} src={message.user.profileUri}></Message>
    ));
  };

  return (
    <ChatroomBodyContainter {...props}>
      <InputMessageWrap>{createMessages()}</InputMessageWrap>
      <InputBoxWrap>
        <InputMessage title={title} chatRoomId={chatRoomId} />
      </InputBoxWrap>
    </ChatroomBodyContainter>
  );
};

export { ChatroomBody, ChatroomBodyProps };

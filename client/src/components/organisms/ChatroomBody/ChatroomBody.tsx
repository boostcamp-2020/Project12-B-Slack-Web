import React from 'react';
import styled from 'styled-components';
import { InputMessage, Message } from '@components/molecules';

interface ChatroomBodyProps {
  title: string;
  messages: Array<object>;
  chatRoomId: number | null;
}

const ChatroomBodyContainter = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  overflow-y: scroll;
`;

const InputMessageWrap = styled.div<any>`
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
      <InputMessageWrap>
        {createMessages()}
        <InputMessage title={title} chatRoomId={chatRoomId} />
      </InputMessageWrap>
    </ChatroomBodyContainter>
  );
};

export { ChatroomBody, ChatroomBodyProps };

import React, { useEffect, useRef } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputMessage, Message } from '@components/molecules';
import { ChatroomEventType } from '@constants/index';

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
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InputBoxWrap = styled.div<any>`
  margin: 1rem;
`;

const ChatroomBody: React.FC<ChatroomBodyProps> = ({ title, messages, chatRoomId, ...props }) => {
  const MessageBodyEl = useRef<any>();
  const [eventType, setEventType] = useState(ChatroomEventType.COMMON);
  const createMessages = () => {
    return messages.map((message: any) => (
      <Message
        key={message.messageId}
        author={message.user.displayName}
        content={message.content}
        src={message.user.profileUri}
        createdAt={message.createdAt}></Message>
    ));
  };

  const moveScrollToTheBottom = () => {
    const { scrollHeight, clientHeight } = MessageBodyEl.current;
    const maxScrollTop = scrollHeight - clientHeight;
    MessageBodyEl.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  useEffect(() => {
    moveScrollToTheBottom();
  });

  return (
    <ChatroomBodyContainter {...props}>
      <InputMessageWrap ref={MessageBodyEl}>{createMessages()}</InputMessageWrap>
      <InputBoxWrap>
        <InputMessage title={title} chatRoomId={chatRoomId} setEventType={setEventType} />
      </InputBoxWrap>
    </ChatroomBodyContainter>
  );
};

export { ChatroomBody, ChatroomBodyProps };

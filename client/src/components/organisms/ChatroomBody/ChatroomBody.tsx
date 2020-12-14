import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputMessage, Message } from '@components/molecules';
import { useDispatch } from 'react-redux';
import { loadNextMessages } from '@store/actions/chatroom-action';
import { ScrollEventType } from '@constants/index';
import { moveScrollToTheBottom } from '@utils/scroll';

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
  const MessageBodyEl = useRef<any>();
  const [eventType, setEventType] = useState(ScrollEventType.COMMON);
  const [lastRequestMessageId, setLastRequestMessageId] = useState(0);
  const dispatch = useDispatch();
  const createMessages = () => {
    return messages.map((message: any) => (
      <Message
        key={message.messageId}
        messageId={message.messageId}
        author={message.user.displayName}
        content={message.content}
        src={message.user.profileUri}
        createdAt={message.createdAt}
        thread={message.thread}
        {...props}></Message>
    ));
  };

  const getCurrentScroll = (e: any) => {
    const offsetMessage: any = messages[0] || null;
    if (eventType !== ScrollEventType.LOADING && e.target.scrollTop <= e.target.scrollHeight / 4 && offsetMessage !== null) {
      if (offsetMessage.messageId === lastRequestMessageId) return;
      setEventType(ScrollEventType.LOADING);
      dispatch(loadNextMessages({ chatRoomId, offsetMessage }));
      setLastRequestMessageId(offsetMessage.messageId);
    }
  };

  useEffect(() => {
    if (eventType !== ScrollEventType.LOADING && eventType !== ScrollEventType.COMPLETELOADING) moveScrollToTheBottom(MessageBodyEl);
    window.addEventListener('scroll', getCurrentScroll);
    return () => window.removeEventListener('scroll', getCurrentScroll);
  });

  useEffect(() => {
    if (eventType === ScrollEventType.LOADING) setEventType(ScrollEventType.COMPLETELOADING);
  }, [messages]);

  useEffect(() => {
    moveScrollToTheBottom(MessageBodyEl);
  }, [title]);

  return (
    <ChatroomBodyContainter {...props}>
      <InputMessageWrap onScroll={getCurrentScroll} ref={MessageBodyEl}>
        {createMessages()}
      </InputMessageWrap>
      <InputBoxWrap>
        <InputMessage title={title} chatRoomId={chatRoomId} setEventType={setEventType} />
      </InputBoxWrap>
    </ChatroomBodyContainter>
  );
};

export { ChatroomBody, ChatroomBodyProps };

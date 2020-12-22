import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputReply, Reply } from '@components/molecules';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
import { moveScrollToTheBottom } from '@utils/scroll';
import { ScrollEventType } from '@constants/index';
import { loadNextReplies } from '@store/actions/thread-action';
import _ from 'lodash';
import { THROTTLETIME } from '@constants/scroll-event-type';
import { ThreadReplies } from './ThreadReplies';

interface ThreadBodyProps {
  messageId: number;
}

const ThreadBodyContainter = styled.div`
  overflow-y: scroll;
  height: 90%;
`;

const InputBoxWrap = styled.div<any>`
  margin: 1rem;
`;

const ReplyTitle = styled.div`
  margin-top: 1rem;
`;

const ThreadBody: React.FC<ThreadBodyProps> = ({ messageId }) => {
  const ThreadBodyEl = useRef<any>();
  const [eventType, setEventType] = useState(ScrollEventType.COMMON);
  const [lastRequestReplyId, setLastRequestReplyId] = useState(0);
  const { message, replies } = useSelector((store: RootState) => store.thread);
  const dispatch = useDispatch();

  const onScrollHandler = (e: any) => {
    const offsetReply: any = replies[0] || null;
    if (eventType !== ScrollEventType.LOADING && e.target.scrollTop <= e.target.scrollHeight / 4 && offsetReply !== null) {
      if (offsetReply.messageId === lastRequestReplyId) return;
      setEventType(ScrollEventType.LOADING);
      dispatch(loadNextReplies({ messageId, offsetReply }));
      setLastRequestReplyId(offsetReply.replyId);
    }
  };

  useEffect(() => {
    if (eventType !== ScrollEventType.LOADING && eventType !== ScrollEventType.COMPLETELOADING) moveScrollToTheBottom(ThreadBodyEl);
  });

  useEffect(() => {
    if (eventType === ScrollEventType.LOADING) setEventType(ScrollEventType.COMPLETELOADING);
  }, [replies]);

  useEffect(() => {
    moveScrollToTheBottom(ThreadBodyEl);
  }, [message]);

  return (
    <ThreadBodyContainter ref={ThreadBodyEl} onScroll={_.throttle(onScrollHandler, THROTTLETIME)}>
      <ReplyTitle>
        <Reply reply={message} />
      </ReplyTitle>
      <ThreadReplies messageId={messageId} />
      <InputBoxWrap>
        <InputReply messageId={messageId} setEventType={setEventType} isThread />
      </InputBoxWrap>
    </ThreadBodyContainter>
  );
};

export { ThreadBody, ThreadBodyProps };

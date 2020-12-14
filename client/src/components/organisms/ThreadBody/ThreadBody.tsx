import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { InputReply, Reply } from '@components/molecules';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
import { moveScrollToTheBottom } from '@utils/scroll';
import { ThreadReplies } from './ThreadReplies';

interface ThreadBodyProps {
  messageId: number | null;
}

const ThreadBodyContainter = styled.div`
  overflow-y: scroll;
  height: 90%;
`;

const InputBoxWrap = styled.div<any>`
  margin: 1rem;
`;

const ThreadBody: React.FC<ThreadBodyProps> = ({ messageId }) => {
  const ThreadBodyEl = useRef<any>();
  const { message } = useSelector((store: RootState) => store.thread);

  useEffect(() => {
    moveScrollToTheBottom(ThreadBodyEl);
  });

  return (
    <ThreadBodyContainter ref={ThreadBodyEl}>
      <Reply reply={message} />
      <ThreadReplies messageId={messageId} />
      <InputBoxWrap>
        <InputReply messageId={messageId} isThread />
      </InputBoxWrap>
    </ThreadBodyContainter>
  );
};

export { ThreadBody, ThreadBodyProps };

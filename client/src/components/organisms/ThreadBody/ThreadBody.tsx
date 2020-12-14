import React from 'react';
import styled from 'styled-components';
import { InputReply, Reply } from '@components/molecules';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
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
  const { message } = useSelector((store: RootState) => store.thread);
  return (
    <ThreadBodyContainter>
      <Reply reply={message} />
      <ThreadReplies messageId={messageId} />
      <InputBoxWrap>
        <InputReply messageId={messageId} isThread />
      </InputBoxWrap>
    </ThreadBodyContainter>
  );
};

export { ThreadBody, ThreadBodyProps };

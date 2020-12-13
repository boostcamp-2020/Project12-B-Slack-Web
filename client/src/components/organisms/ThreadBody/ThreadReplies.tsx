import { Reply } from '@components/molecules';
import { RootState } from '@store/reducers';
import { color } from '@theme/index';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface ThreadRepliesProps {
  messageId: number | null;
}

const ThreadRepliesContainter = styled.div<any>``;

const ReplyBarContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReplyBarText = styled.p<any>`
  margin: 0;
  color: ${color.text_primary};
`;

const ReplyBarLine = styled.div<any>`
  height: 2px;
  width: 80%;
  background-color: ${color.quaternary};
  margin: 0rem 0.3rem;
`;

const ThreadReplies: React.FC<ThreadRepliesProps> = () => {
  const { replies } = useSelector((store: RootState) => store.thread);
  const createReplies = () => {
    return replies.map((reply: any) => <Reply reply={reply} />);
  };
  const replyLength = replies.length;
  return (
    <ThreadRepliesContainter>
      {replyLength !== 0 ? (
        <ReplyBarContainer>
          <ReplyBarText>{replyLength} reply</ReplyBarText>
          <ReplyBarLine />
        </ReplyBarContainer>
      ) : null}
      {replyLength !== 0 ? createReplies() : null}
    </ThreadRepliesContainter>
  );
};

export { ThreadReplies, ThreadRepliesProps };

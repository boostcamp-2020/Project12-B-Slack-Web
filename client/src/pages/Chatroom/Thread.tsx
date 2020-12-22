import React, { useEffect } from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { ThreadHeader, ThreadBody } from '@components/organisms';
import { useDispatch } from 'react-redux';
import { loadThread } from '@store/actions/thread-action';
import { getThreadId } from '@utils/uriParser';

interface ThreadProps {}

const ThreadContainer = styled.div<any>`
  width: 35%;
  min-width: 25rem;
  height: 100%;
  border-left: 1px solid ${color.border_primary};
`;

const Thread: React.FC<ThreadProps> = () => {
  const dispatch = useDispatch();
  const threadId = getThreadId();

  useEffect(() => {
    dispatch(loadThread({ messageId: threadId || 0 }));
  }, []);

  return (
    <ThreadContainer>
      <ThreadHeader />
      <ThreadBody messageId={threadId} />
    </ThreadContainer>
  );
};

export { Thread };

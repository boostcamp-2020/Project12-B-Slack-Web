import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { ThreadHeader } from '@components/organisms';

interface ThreadProps {}

const ThreadContainer = styled.div<any>`
  width: 40rem;
  height: 100%;
  border-left: 1px solid ${color.border_primary};
`;

const Thread: React.FC<ThreadProps> = () => {
  return (
    <ThreadContainer>
      <ThreadHeader />
    </ThreadContainer>
  );
};

export { Thread };

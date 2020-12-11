import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';

interface ThreadProps {}

const ThreadContainer = styled.div<any>`
  width: 70rem;
  height: 100%;
  border-left: 1px solid ${color.border_primary};
`;

const ThreadHeader = styled.div<any>`
  height: 10%;
  box-shadow: 0 3px 2px -2px ${color.border_primary};
`;

const Thread: React.FC<ThreadProps> = ({ ...props }) => {
  return (
    <ThreadContainer>
      <ThreadHeader />
    </ThreadContainer>
  );
};

export { Thread };

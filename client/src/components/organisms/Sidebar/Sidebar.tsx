import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';

interface SidebarProps {
  children: React.ReactNode;
}

const StyledSidebar = styled.div<any>`
  background-color: #1a1e22;
  height: 100vh;
  width: 23%;
`;

const Workspace = styled.div<any>`
  display: flex;
  align-items: center;
  height: 5rem;
  padding-left: 1rem;
  border-bottom: 1px solid #313537;
`;

const ChildrenWrap = styled.div<any>`
  padding: 1rem;
`;

const Sidebar: React.FC<SidebarProps> = ({ children, ...props }) => {
  return (
    <StyledSidebar {...props}>
      <Workspace>
        <Text isBold={true} size="small" isTitle={true}>
          부스트캠프 2020 멤버십
        </Text>
      </Workspace>
      <ChildrenWrap>{children}</ChildrenWrap>
    </StyledSidebar>
  );
};

export { Sidebar, SidebarProps };

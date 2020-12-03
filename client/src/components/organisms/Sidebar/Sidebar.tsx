import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { Channel, DM, Section } from '@components/molecules';
import { color } from '@theme/index';

interface SidebarProps {
  children?: React.ReactNode;
  starred: Array<any>;
  otherSections: Array<any>;
  channels: Array<any>;
  directMessages: Array<any>;
  selectedChatroomId?: number;
}

const StyledSidebar = styled.div<any>`
  background-color: ${color.sidebar_bg};
  height: 100%;
  width: 23%;
`;

const Workspace = styled.div<any>`
  display: flex;
  align-items: center;
  height: 10%;
  padding-left: 1rem;
  border-bottom: 1px solid ${color.sidebar_border};
`;

const ChildrenWrap = styled.div<any>`
  padding: 1rem;
`;

const Sidebar: React.FC<SidebarProps> = ({ children, starred, otherSections, channels, directMessages, selectedChatroomId, ...props }) => {
  const makeStarredSection = () => {
    if (starred.length === 0) return null;
    const chatrooms = starred.map((chatroom) => (
      <Channel
        chatroomId={chatroom.chatroomId}
        key={chatroom.chatroomId}
        isPrivate={chatroom.isPrivate}
        isSelect={selectedChatroomId === chatroom.chatroomId}>
        {chatroom.title}
      </Channel>
    ));
    return <Section SectionName="starred">{chatrooms}</Section>;
  };
  const makeChannelSection = () => {
    if (channels.length === 0) return null;
    const chatrooms = channels.map((chatroom) => (
      <Channel
        chatroomId={chatroom.chatroomId}
        key={chatroom.chatroomId}
        isPrivate={chatroom.isPrivate}
        isSelect={selectedChatroomId === chatroom.chatroomId}>
        {chatroom.title}
      </Channel>
    ));
    return <Section SectionName="Channels">{chatrooms}</Section>;
  };
  const makeDMSection = () => {
    if (directMessages.length === 0) return null;
    const chatrooms = directMessages.map((chatroom) => (
      <DM
        src={chatroom.chatProfileImg}
        chatroomId={chatroom.chatroomId}
        key={chatroom.chatroomId}
        isSelect={selectedChatroomId === chatroom.chatroomId}>
        {chatroom.title}
      </DM>
    ));
    return <Section SectionName="Direct Messages">{chatrooms}</Section>;
  };
  return (
    <StyledSidebar {...props}>
      <Workspace>
        <Text isBold={true} size="small" isTitle={true}>
          부스트캠프 2020 멤버십
        </Text>
      </Workspace>
      <ChildrenWrap>
        {makeStarredSection()}
        {makeChannelSection()}
        {makeDMSection()}
      </ChildrenWrap>
    </StyledSidebar>
  );
};

export { Sidebar, SidebarProps };

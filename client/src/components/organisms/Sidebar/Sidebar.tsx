import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { Channel, DM, Section } from '@components/molecules';
import { color } from '@theme/index';
import { useDispatch, useSelector } from 'react-redux';
import { initSidebarAsync } from '@store/actions/chatroom-action';
import { RootState } from '@store/reducers';
import { DefaultSectionName } from '@constants/default-section-name';

interface SidebarProps {
  children?: React.ReactNode;
}

const StyledSidebar = styled.div<any>`
  background-color: ${color.sidebar_bg};
  height: 100%;
  width: 25rem;
`;

const Workspace = styled.div<any>`
  display: flex;
  align-items: center;
  height: 10%;
  padding-left: 1rem;
  box-shadow: 0 1.5px 2px -2px ${color.border_primary};
`;

const ChildrenWrap = styled.div<any>`
  overflow-y: scroll;
  padding: 0rem 1rem;
  height: 90%;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SectionWrap = styled.div<any>`
  padding: 1rem 0rem;
`;

const Sidebar: React.FC<SidebarProps> = ({ children, ...props }) => {
  const dispatch = useDispatch();

  const { starred, otherSections, channels, directMessages, selectedChatroomId } = useSelector((store: RootState) => store.chatroom);

  useEffect(() => {
    dispatch(initSidebarAsync());
  }, []);

  const createSection = (sectionItems: Array<any>, sectionName: string) => {
    if (sectionItems.length === 0) return null;
    const chatrooms = sectionItems.map((chatroom) =>
      chatroom.chatType === 'Channel' ? (
        <Channel
          chatroomId={chatroom.chatroomId}
          key={chatroom.chatroomId}
          isPrivate={chatroom.isPrivate}
          isSelect={selectedChatroomId === chatroom.chatroomId}>
          {chatroom.title}
        </Channel>
      ) : (
        <DM
          src={chatroom.chatProfileImg}
          chatroomId={chatroom.chatroomId}
          key={chatroom.chatroomId}
          isSelect={selectedChatroomId === chatroom.chatroomId}>
          {chatroom.title}
        </DM>
      )
    );
    return <Section sectionName={sectionName}>{chatrooms}</Section>;
  };

  return (
    <StyledSidebar {...props}>
      <Workspace>
        <Text isBold={true} size="small" isTitle={true}>
          부스트캠프 2020 멤버십
        </Text>
      </Workspace>
      <ChildrenWrap>
        <SectionWrap>
          {createSection(starred, DefaultSectionName.STARRED)}
          {createSection(channels, DefaultSectionName.CHANNELS)}
          {createSection(directMessages, DefaultSectionName.DIRECT_MESSAGES)}
        </SectionWrap>
      </ChildrenWrap>
    </StyledSidebar>
  );
};

export { Sidebar, SidebarProps };

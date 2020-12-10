import React from 'react';
import styled from 'styled-components';
import { BrowsePageHeader, BrowsePageChannel } from '@components/organisms';
import { BrowsePageControls, BrowsePageSearchBar } from '@components/molecules';

interface ChannelBrowserProps {
  children: React.ReactNode;
}

const ChannelBrowserContainer = styled.div<any>`
  height: 100%;
`;

const SearchBarWrap = styled.div<any>`
  padding: 1rem 1.5rem;
`;

const ChannelBrowser: React.FC<ChannelBrowserProps> = ({ children, ...props }) => {
  return (
    <ChannelBrowserContainer {...props}>
      <BrowsePageHeader />
      <SearchBarWrap>
        <BrowsePageSearchBar />
      </SearchBarWrap>
      <BrowsePageControls channelCount={1} />
      <BrowsePageChannel name="notice" isJoined={true} memberCount={4} description={'공지사항을 안내하는 채널'} isPrivate={true} />
    </ChannelBrowserContainer>
  );
};

export { ChannelBrowser };

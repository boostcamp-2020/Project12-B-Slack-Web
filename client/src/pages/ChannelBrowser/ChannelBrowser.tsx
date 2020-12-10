import React from 'react';
import styled from 'styled-components';
import { BrowsePageHeader } from '@components/organisms';
import { BrowsePageSearchBar } from '@components/molecules';

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
    </ChannelBrowserContainer>
  );
};

export { ChannelBrowser };

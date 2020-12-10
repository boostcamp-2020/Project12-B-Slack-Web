import React from 'react';
import styled from 'styled-components';
import { BrowsePageHeader } from '@components/organisms';

interface ChannelBrowserProps {
  children: React.ReactNode;
}

const ChannelBrowserContainer = styled.div<any>`
  height: 100%;
`;

const ChannelBrowser: React.FC<ChannelBrowserProps> = ({ children, ...props }) => {
  return (
    <ChannelBrowserContainer {...props}>
      <BrowsePageHeader />
    </ChannelBrowserContainer>
  );
};

export { ChannelBrowser };

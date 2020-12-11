import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowsePageChannelList, BrowsePageHeader } from '@components/organisms';
import { BrowsePageControls, BrowsePageSearchBar } from '@components/molecules';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers/index';
import { initChannels } from '@store/actions/channel-action';

interface ChannelBrowserProps {
  children: React.ReactNode;
}

const ChannelBrowserContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SearchBarWrap = styled.div<any>`
  padding: 1rem 1.5rem;
`;

const ChannelBrowser: React.FC<ChannelBrowserProps> = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const { channelCount, channels } = useSelector((store: RootState) => store.channel);

  useEffect(() => {
    dispatch(initChannels());
  }, []);

  return (
    <ChannelBrowserContainer {...props}>
      <BrowsePageHeader />
      <SearchBarWrap>
        <BrowsePageSearchBar />
      </SearchBarWrap>
      <BrowsePageControls channelCount={channelCount} />
      <BrowsePageChannelList channels={channels} />
    </ChannelBrowserContainer>
  );
};

export { ChannelBrowser };

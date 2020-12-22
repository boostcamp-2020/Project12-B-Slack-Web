import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowsePageChannelList, BrowsePageHeader } from '@components/organisms';
import { BrowsePageControls, BrowsePageSearchBar } from '@components/molecules';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers/index';
import { initChannels } from '@store/actions/channel-action';
import { createModalOpen } from '@store/actions/modal-action';

interface ChannelBrowserProps {
  children: React.ReactNode;
}

const ChannelBrowserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SearchBarWrap = styled.div`
  padding: 1rem 1.5rem;
`;

const ChannelBrowser: React.FC<ChannelBrowserProps> = ({ children, ...props }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { channelCount, channels } = useSelector((store: RootState) => store.channel);
  const { selectedChatroomId } = useSelector((store: RootState) => store.chatroom);

  const handlingCreateButtonClick = () => {
    dispatch(createModalOpen());
  };

  useEffect(() => {
    dispatch(initChannels());
  }, []);

  useEffect(() => {
    if (selectedChatroomId) history.push(`/client/${selectedChatroomId}`);
  }, [selectedChatroomId]);

  return (
    <ChannelBrowserContainer {...props}>
      <BrowsePageHeader onClick={handlingCreateButtonClick} />
      <SearchBarWrap>
        <BrowsePageSearchBar />
      </SearchBarWrap>
      <BrowsePageControls channelCount={channelCount} />
      <BrowsePageChannelList channels={channels} />
    </ChannelBrowserContainer>
  );
};

export { ChannelBrowser };

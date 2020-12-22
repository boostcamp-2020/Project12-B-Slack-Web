import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowsePageChannel } from '@components/organisms';
import { useDispatch } from 'react-redux';
import { ChannelState } from '@store/types/channel-types';
import { loadNextChannels } from '@store/actions/channel-action';

interface BrowsePageChannelListProps {
  channels: Array<ChannelState>;
}

const BrowsePageChannelListContainter = styled.div<any>`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0rem 1.5rem;
  height: 71%;
`;

const BrowsePageChannelList: React.FC<BrowsePageChannelListProps> = ({ channels, ...props }) => {
  const dispatch = useDispatch();
  const [lastRequestChannelTitle, setLastRequestChannelTitle] = useState('');
  const onScrollHandler = (e: any) => {
    const title: string | null = channels[channels.length - 1]?.title;
    if (e.target.scrollTop >= ((e.target.scrollHeight - e.target.clientHeight) * 2) / 3) {
      if (title === lastRequestChannelTitle) return;
      dispatch(loadNextChannels({ title }));
      setLastRequestChannelTitle(title);
    }
  };

  const createMessages = () => {
    return channels.map((channel: any) => (
      <BrowsePageChannel
        key={channel.chatroomId}
        chatroomId={channel.chatroomId}
        title={channel.title}
        description={channel.description}
        isPrivate={channel.isPrivate}
        members={channel.members}
        isJoined={channel.isJoined}
      />
    ));
  };

  return (
    <BrowsePageChannelListContainter onScroll={onScrollHandler} {...props}>
      {createMessages()}
    </BrowsePageChannelListContainter>
  );
};

export { BrowsePageChannelList, BrowsePageChannelListProps };

import React from 'react';
import styled from 'styled-components';
import { BrowsePageChannel } from '@components/organisms';

interface BrowsePageChannelListProps {
  channels: Array<object>;
}

const BrowsePageChannelListContainter = styled.div<any>`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0rem 1.5rem;
  height: 71%;
`;

const BrowsePageChannelList: React.FC<BrowsePageChannelListProps> = ({ channels, ...props }) => {
  const createMessages = () => {
    return channels.map((channel: any) => (
      <BrowsePageChannel
        key={channel.chatroomId}
        title={channel.title}
        description={channel.description}
        isPrivate={channel.isPrivate}
        members={channel.members}
        isJoined={channel.isJoined}
      />
    ));
  };

  return <BrowsePageChannelListContainter {...props}>{createMessages()}</BrowsePageChannelListContainter>;
};

export { BrowsePageChannelList, BrowsePageChannelListProps };

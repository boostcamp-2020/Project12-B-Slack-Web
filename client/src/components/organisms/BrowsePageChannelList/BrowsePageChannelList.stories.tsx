import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageChannelList, BrowsePageChannelListProps } from './BrowsePageChannelList';

export default {
  title: 'organisms/BrowsePageChannelList',
  component: BrowsePageChannelList
} as Meta;

const Template: Story<BrowsePageChannelListProps> = (args) => <BrowsePageChannelList {...args} />;

export const BlackBrowsePageChannelList = Template.bind({});
BlackBrowsePageChannelList.args = {
  channels: [
    {
      channelId: 1,
      title: 'notice',
      description: '공지사항을 안내하는 채널',
      isPrivate: false,
      members: 110,
      isJoined: true
    },
    {
      channelId: 2,
      title: '질의응답',
      isPrivate: false,
      members: 10,
      isJoined: false
    },
    {
      channelId: 3,
      title: 'black',
      description: 'black',
      isPrivate: true,
      members: 3,
      isJoined: true
    }
  ]
};

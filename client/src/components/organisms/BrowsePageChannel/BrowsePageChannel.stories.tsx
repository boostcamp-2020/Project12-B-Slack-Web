import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageChannel, BrowsePageChannelProps } from './BrowsePageChannel';

export default {
  title: 'organisms/BrowsePageChannel',
  component: BrowsePageChannel
} as Meta;

const Template: Story<BrowsePageChannelProps> = (args) => <BrowsePageChannel {...args} />;

export const BlackBrowsePageChannel = Template.bind({});
BlackBrowsePageChannel.args = {
  chatroomId: 1,
  title: 'notice',
  isJoined: true,
  members: 4,
  description: '공지사항을 안내하는 채널',
  isPrivate: true
};

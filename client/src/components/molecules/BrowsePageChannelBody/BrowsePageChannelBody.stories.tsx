import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageChannelBody, BrowsePageChannelBodyProps } from './BrowsePageChannelBody';

export default {
  title: 'molecules/BrowsePageChannelBody',
  component: BrowsePageChannelBody
} as Meta;

const Template: Story<BrowsePageChannelBodyProps> = (args) => <BrowsePageChannelBody {...args} />;

export const BlackBrowsePageChannelBody = Template.bind({});
BlackBrowsePageChannelBody.args = {
  isJoined: true,
  memberCount: 4,
  description: '공지사항을 안내하는 채널'
};

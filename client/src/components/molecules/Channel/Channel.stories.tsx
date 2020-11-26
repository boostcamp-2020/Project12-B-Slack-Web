import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Channel, ChannelProps } from './Channel';

export default {
  title: 'molecules/Channel',
  component: Channel
} as Meta;

const Template: Story<ChannelProps> = (args) => <Channel {...args} />;

export const BlackChannel = Template.bind({});
BlackChannel.args = {
  children: '5주-그룹-프로젝트-슬랙'
};

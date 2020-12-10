import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MessageReplyBar, MessageReplyBarProps } from './MessageReplyBar';

export default {
  title: 'molecules/MessageReplyBar',
  component: MessageReplyBar
} as Meta;

const Template: Story<MessageReplyBarProps> = (args) => <MessageReplyBar {...args} />;

const handlingMessageReplyBarClick = () => {};

export const OneMessageReplyBar = Template.bind({});
OneMessageReplyBar.args = {
  profileImgs: ['https://avatars1.githubusercontent.com/u/59037261?s=64&v=4'],
  replyCount: 1,
  lastRepliedTime: new Date('2020-12-07 23:48:52.547160'),
  onClick: handlingMessageReplyBarClick
};

export const ThreeMessageReplyBar = Template.bind({});
ThreeMessageReplyBar.args = {
  profileImgs: [
    'https://avatars3.githubusercontent.com/u/33643752?s=64&v=4',
    'https://avatars1.githubusercontent.com/u/59037261?s=64&v=4',
    'https://avatars0.githubusercontent.com/u/37091190?s=64&v=4'
  ],
  replyCount: 3,
  lastRepliedTime: new Date('2020-12-08 08:32:51.536510'),
  onClick: handlingMessageReplyBarClick
};

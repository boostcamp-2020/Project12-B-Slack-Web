import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ChatroomHeader, ChatroomHeaderProps } from './ChatroomHeader';

export default {
  title: 'organisms/ChatroomHeader',
  component: ChatroomHeader
} as Meta;

const Template: Story<ChatroomHeaderProps> = (args) => <ChatroomHeader {...args} />;

export const BlackChatroomHeader = Template.bind({});
BlackChatroomHeader.args = {
  title: '5주-그룹-프로젝트-슬랙b'
};

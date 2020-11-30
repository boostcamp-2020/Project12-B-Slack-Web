import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ChatroomBody, ChatroomBodyProps } from './ChatroomBody';

export default {
  title: 'organisms/ChatroomBody',
  component: ChatroomBody
} as Meta;

const Template: Story<ChatroomBodyProps> = (args) => <ChatroomBody {...args} />;

export const BlackChatroomBody = Template.bind({});
BlackChatroomBody.args = {
  title: '5주-그룹-프로젝트-슬랙b'
};

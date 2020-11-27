import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputMessage, InputMessageProps } from './InputMessage';

export default {
  title: 'molecules/InputMessage',
  component: InputMessage
} as Meta;

const Template: Story<InputMessageProps> = (args) => <InputMessage {...args} />;

export const MessageInputMessage = Template.bind({});
MessageInputMessage.args = {
  isThread: false,
  title: '5주-그룹-프로젝트-슬랙b'
};

export const ThreadInputMessage = Template.bind({});
ThreadInputMessage.args = {
  isThread: true
};

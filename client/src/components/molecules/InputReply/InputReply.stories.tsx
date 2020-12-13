import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputReply, InputReplyProps } from './InputReply';

export default {
  title: 'molecules/InputReply',
  component: InputReply
} as Meta;

const Template: Story<InputReplyProps> = (args) => <InputReply {...args} />;

export const ThreadInputReply = Template.bind({});
ThreadInputReply.args = {
  isThread: true
};

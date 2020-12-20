import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './Input';

export default {
  title: 'atom/Input',
  component: Input
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const BlackInput = Template.bind({});
BlackInput.args = {
  id: 'thread',
  title: '5주-그룹-프로젝트-슬랙b'
};

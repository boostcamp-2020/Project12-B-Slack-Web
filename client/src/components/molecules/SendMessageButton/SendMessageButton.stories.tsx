import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SendMessageButton, SendMessageButtonProps } from './SendMessageButton';

export default {
  title: 'molecules/SendMessageButton',
  component: SendMessageButton
} as Meta;

const Template: Story<SendMessageButtonProps> = (args) => <SendMessageButton {...args} />;

export const ActiveMessageButton = Template.bind({});
ActiveMessageButton.args = {
  isActive: true
};

export const InactiveMessageButton = Template.bind({});
InactiveMessageButton.args = {
  isActive: false
};

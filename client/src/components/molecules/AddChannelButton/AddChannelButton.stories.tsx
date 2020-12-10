import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddChannelButton, AddChannelButtonProps } from './AddChannelButton';

export default {
  title: 'molecules/AddChannelButton',
  component: AddChannelButton
} as Meta;

const Template: Story<AddChannelButtonProps> = (args) => <AddChannelButton {...args} />;

export const BlackAddChannelButton = Template.bind({});
BlackAddChannelButton.args = {};

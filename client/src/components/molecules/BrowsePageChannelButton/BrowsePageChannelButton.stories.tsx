import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageChannelButton, BrowsePageChannelButtonProps } from './BrowsePageChannelButton';

export default {
  title: 'molecules/BrowsePageChannelButton',
  component: BrowsePageChannelButton
} as Meta;

const Template: Story<BrowsePageChannelButtonProps> = (args) => <BrowsePageChannelButton {...args} />;

export const BlackBrowsePageChannelButton = Template.bind({});
BlackBrowsePageChannelButton.args = {
  isJoined: true
};

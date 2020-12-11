import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageChannelHeader, BrowsePageChannelHeaderProps } from './BrowsePageChannelHeader';

export default {
  title: 'molecules/BrowsePageChannelHeader',
  component: BrowsePageChannelHeader
} as Meta;

const Template: Story<BrowsePageChannelHeaderProps> = (args) => <BrowsePageChannelHeader {...args} />;

export const BlackBrowsePageChannelHeader = Template.bind({});
BlackBrowsePageChannelHeader.args = {
  title: 'notice',
  isPrivate: true
};

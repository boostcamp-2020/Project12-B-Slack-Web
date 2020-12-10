import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageControls, BrowsePageControlsProps } from './BrowsePageControls';

export default {
  title: 'molecules/BrowsePageControls',
  component: BrowsePageControls
} as Meta;

const Template: Story<BrowsePageControlsProps> = (args) => <BrowsePageControls {...args} />;

export const BlackBrowsePageControls = Template.bind({});
BlackBrowsePageControls.args = {
  channelCount: 193
};

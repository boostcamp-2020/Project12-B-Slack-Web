import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageSearchBar, BrowsePageSearchBarProps } from './BrowsePageSearchBar';

export default {
  title: 'molecules/BrowsePageSearchBar',
  component: BrowsePageSearchBar
} as Meta;

const Template: Story<BrowsePageSearchBarProps> = (args) => <BrowsePageSearchBar {...args} />;

export const BlackBrowsePageSearchBar = Template.bind({});
BlackBrowsePageSearchBar.args = {};

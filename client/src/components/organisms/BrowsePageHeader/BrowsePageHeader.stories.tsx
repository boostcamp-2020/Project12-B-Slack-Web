import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowsePageHeader, BrowsePageHeaderProps } from './BrowsePageHeader';

export default {
  title: 'organisms/BrowsePageHeader',
  component: BrowsePageHeader
} as Meta;

const onClick = () => {};

const Template: Story<BrowsePageHeaderProps> = (args) => <BrowsePageHeader {...args} />;

export const BlackBrowsePageHeader = Template.bind({});
BlackBrowsePageHeader.args = {
  onClick
};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DropMenuItem, DropMenuItemProps } from './DropMenuItem';

export default {
  title: 'atom/DropMenuItem',
  component: DropMenuItem
} as Meta;

const Template: Story<DropMenuItemProps> = (args) => <DropMenuItem {...args} />;

export const PrimaryDropMenuItem = Template.bind({});
PrimaryDropMenuItem.args = {
  children: 'item'
};

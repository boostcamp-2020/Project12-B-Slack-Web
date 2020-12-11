import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserBoxModalSearchBar, UserBoxModalSearchBarProps } from './UserBoxModalSearchBar';

export default {
  title: 'molecules/UserBoxModalSearchBar',
  component: UserBoxModalSearchBar
} as Meta;

const Template: Story<UserBoxModalSearchBarProps> = (args) => <UserBoxModalSearchBar {...args} />;

export const BlackUserBoxModalSearchBar = Template.bind({});
BlackUserBoxModalSearchBar.args = {};

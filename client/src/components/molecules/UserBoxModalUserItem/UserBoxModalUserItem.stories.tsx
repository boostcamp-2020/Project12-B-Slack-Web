import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserBoxModalUserItem, UserBoxModalUserItemProps } from './UserBoxModalUserItem';

export default {
  title: 'molecules/UserBoxModalUserItem',
  component: UserBoxModalUserItem
} as Meta;

const Template: Story<UserBoxModalUserItemProps> = (args) => <UserBoxModalUserItem {...args} />;

export const BlackUserBoxModalUserItem = Template.bind({});
BlackUserBoxModalUserItem.args = {
  src: 'https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4',
  author: 'J030_김도호'
};

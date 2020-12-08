import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserBox, UserBoxProps } from './UserBox';

export default {
  title: 'molecules/UserBox',
  component: UserBox
} as Meta;

const Template: Story<UserBoxProps> = (args) => <UserBox {...args} />;

export const OneUserBox = Template.bind({});
OneUserBox.args = {
  member: [{ name: '김도호', profileUri: 'https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4' }]
};

export const TwoUserBox = Template.bind({});
TwoUserBox.args = {
  member: [
    { name: '강동훈', profileUri: 'https://avatars0.githubusercontent.com/u/37091190?s=400&u=d358f361db0c43c0fccdcbd31de5ded89efe0169&v=4' },
    { name: '김도호', profileUri: 'https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4' }
  ]
};

export const ThreeUserBox = Template.bind({});
ThreeUserBox.args = {
  member: [
    { name: '강동훈', profileUri: 'https://avatars0.githubusercontent.com/u/37091190?s=400&u=d358f361db0c43c0fccdcbd31de5ded89efe0169&v=4' },
    { name: '김도호', profileUri: 'https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4' },
    { name: '탁성건', profileUri: 'https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4' }
  ]
};

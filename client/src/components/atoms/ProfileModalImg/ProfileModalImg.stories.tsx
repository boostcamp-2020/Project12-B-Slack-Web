import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProfileModalImg, ProfileModalImgProps } from './ProfileModalImg';

export default {
  title: 'atom/ProfileModalImg',
  component: ProfileModalImg
} as Meta;

const Template: Story<ProfileModalImgProps> = (args) => <ProfileModalImg {...args} />;

export const BlackProfileModalImg = Template.bind({});
BlackProfileModalImg.args = {
  profileUri: 'https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4'
};

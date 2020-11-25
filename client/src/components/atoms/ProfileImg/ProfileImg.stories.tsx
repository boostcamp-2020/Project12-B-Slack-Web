import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProfileImg, ProfileImgProps } from './ProfileImg';

export default {
  title: 'atom/ProfileImg',
  component: ProfileImg
} as Meta;

const Template: Story<ProfileImgProps> = (args) => <ProfileImg {...args} />;

export const LargeProfileImg = Template.bind({});
LargeProfileImg.args = {
  size: 'large'
};

export const MediumProfileImg = Template.bind({});
MediumProfileImg.args = {
  size: 'medium'
};

export const SmallProfileImg = Template.bind({});
SmallProfileImg.args = {
  size: 'small'
};

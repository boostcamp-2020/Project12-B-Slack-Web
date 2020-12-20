import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Size } from '@constants/index';
import { ProfileImg, ProfileImgProps } from './ProfileImg';

export default {
  title: 'atom/ProfileImg',
  component: ProfileImg
} as Meta;

const Template: Story<ProfileImgProps> = (args) => <ProfileImg {...args} />;

export const LargeProfileImg = Template.bind({});
LargeProfileImg.args = {
  size: Size.LARGE
};

export const MediumProfileImg = Template.bind({});
MediumProfileImg.args = {
  size: Size.MEDIUM
};

export const SmallProfileImg = Template.bind({});
SmallProfileImg.args = {
  size: Size.SMALL
};

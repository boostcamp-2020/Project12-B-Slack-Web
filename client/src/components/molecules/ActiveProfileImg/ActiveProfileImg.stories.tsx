import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '@imgs/logo.png';
import { ActiveProfileImg, ActiveProfileImgProps } from './ActiveProfileImg';

export default {
  title: 'molecules/ActiveProfileImg',
  component: ActiveProfileImg
} as Meta;

const Template: Story<ActiveProfileImgProps> = (args) => <ActiveProfileImg {...args} />;

export const LargeActiveProfileImg = Template.bind({});
LargeActiveProfileImg.args = {
  size: 'large',
  src: Logo
};

export const MediumActiveProfileImg = Template.bind({});
MediumActiveProfileImg.args = {
  size: 'medium',
  src: Logo
};

export const SmallActiveProfileImg = Template.bind({});
SmallActiveProfileImg.args = {
  size: 'small',
  src: Logo
};

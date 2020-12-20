import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '@imgs/logo.png';
import { Size } from '@constants/index';
import { ActiveProfileImg, ActiveProfileImgProps } from './ActiveProfileImg';

export default {
  title: 'molecules/ActiveProfileImg',
  component: ActiveProfileImg
} as Meta;

const Template: Story<ActiveProfileImgProps> = (args) => <ActiveProfileImg {...args} />;

export const LargeActiveProfileImg = Template.bind({});
LargeActiveProfileImg.args = {
  size: Size.LARGE,
  src: Logo
};

export const MediumActiveProfileImg = Template.bind({});
MediumActiveProfileImg.args = {
  size: Size.MEDIUM,
  src: Logo
};

export const SmallActiveProfileImg = Template.bind({});
SmallActiveProfileImg.args = {
  size: Size.SMALL,
  src: Logo
};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '@imgs/logo.png';
import Channel from '@imgs/channel-icon.png';
import Lock from '@imgs/lock-icon.png';
import Star from '@imgs/star.png';
import BlueStar from '@imgs/star-blue.png';
import { Icon, IconProps } from './Icon';

export default {
  title: 'atom/Icon',
  component: Icon
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const LogoIcon = Template.bind({});
LogoIcon.args = {
  size: 'medium',
  src: Logo
};

export const ChannelIcon = Template.bind({});
ChannelIcon.args = {
  size: 'medium',
  src: Channel
};

export const LockIcon = Template.bind({});
LockIcon.args = {
  size: 'medium',
  src: Lock
};

export const StarIcon = Template.bind({});
StarIcon.args = {
  size: 'medium',
  src: Star
};

export const BlueStarIcon = Template.bind({});
BlueStarIcon.args = {
  size: 'medium',
  src: BlueStar
};

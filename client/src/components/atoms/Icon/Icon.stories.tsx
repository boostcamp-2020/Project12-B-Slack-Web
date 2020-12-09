import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '@imgs/logo.png';
import Channel from '@imgs/channel-icon.png';
import Lock from '@imgs/lock-icon.png';
import Star from '@imgs/star.png';
import BlueStar from '@imgs/star-blue.png';
import Plus from '@imgs/plus-icon.png';
import Detail from '@imgs/detail-icon.png';
import User from '@imgs/user-icon.png';
import Option from '@imgs/option-icon.png';
import Sort from '@imgs/sort-icon.png';
import Filter from '@imgs/filter-icon.png';
import Search from '@imgs/search-icon.png';
import CloseFilled from '@imgs/close-filled-icon.png';
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

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  size: 'medium',
  src: Plus
};

export const DetailIcon = Template.bind({});
DetailIcon.args = {
  size: 'medium',
  src: Detail
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  size: 'medium',
  src: User
};

export const OptionIcon = Template.bind({});
OptionIcon.args = {
  size: 'medium',
  src: Option
};

export const SortIcon = Template.bind({});
SortIcon.args = {
  size: 'medium',
  src: Sort
};

export const FilterIcon = Template.bind({});
FilterIcon.args = {
  size: 'medium',
  src: Filter
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  size: 'medium',
  src: Search
};

export const CloseFilledIcon = Template.bind({});
CloseFilledIcon.args = {
  size: 'medium',
  src: CloseFilled
};

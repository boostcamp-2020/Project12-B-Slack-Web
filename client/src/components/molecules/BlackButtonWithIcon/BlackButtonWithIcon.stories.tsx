import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SortIcon from '@imgs/sort-icon.png';
import { BlackButtonWithIcon, BlackButtonWithIconProps } from './BlackButtonWithIcon';

export default {
  title: 'molecules/BlackButtonWithIcon',
  component: BlackButtonWithIcon
} as Meta;

const onClick = () => {};

const Template: Story<BlackButtonWithIconProps> = (args) => <BlackButtonWithIcon {...args} />;

export const BlackBlackButtonWithIcon = Template.bind({});
BlackBlackButtonWithIcon.args = {
  children: 'Sort',
  iconSrc: SortIcon,
  onClick
};

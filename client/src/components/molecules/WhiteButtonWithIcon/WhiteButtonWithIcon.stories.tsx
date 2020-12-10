import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SortIcon from '@imgs/sort-icon.png';
import { WhiteButtonWithIcon, WhiteButtonWithIconProps } from './WhiteButtonWithIcon';

export default {
  title: 'molecules/WhiteButtonWithIcon',
  component: WhiteButtonWithIcon
} as Meta;

const onClick = () => {};

const Template: Story<WhiteButtonWithIconProps> = (args) => <WhiteButtonWithIcon {...args} />;

export const BlackWhiteButtonWithIcon = Template.bind({});
BlackWhiteButtonWithIcon.args = {
  children: 'Sort',
  iconSrc: SortIcon,
  onClick
};

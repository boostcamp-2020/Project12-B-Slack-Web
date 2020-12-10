import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Plus from '@imgs/plus-icon.png';
import { HoverIcon, HoverIconProps } from './HoverIcon';

export default {
  title: 'molecules/HoverIcon',
  component: HoverIcon
} as Meta;

const Template: Story<HoverIconProps> = (args) => <HoverIcon {...args} />;

export const MediumHoverIcon = Template.bind({});
MediumHoverIcon.args = {
  src: Plus,
  size: 'medium'
};

export const LargeHoverIcon = Template.bind({});
LargeHoverIcon.args = {
  src: Plus,
  size: 'large'
};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '@imgs/logo.png';
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

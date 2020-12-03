import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LogoImg, LogoImgProps } from './LogoImg';

export default {
  title: 'atom/LogoImg',
  component: LogoImg
} as Meta;

const Template: Story<LogoImgProps> = (args) => <LogoImg {...args} />;

export const BlackLogoImg = Template.bind({});
BlackLogoImg.args = {};

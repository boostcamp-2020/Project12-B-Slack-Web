import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Size } from '@constants/index';
import { ActiveLight, ActiveLightProps } from './ActiveLight';

export default {
  title: 'atom/ActiveLight',
  component: ActiveLight
} as Meta;

const Template: Story<ActiveLightProps> = (args) => <ActiveLight {...args} />;

export const LargeActiveLight = Template.bind({});
LargeActiveLight.args = {
  size: Size.LARGE
};

export const MediumActiveLight = Template.bind({});
MediumActiveLight.args = {
  size: Size.MEDIUM
};

export const SmallActiveLight = Template.bind({});
SmallActiveLight.args = {
  size: Size.SMALL
};

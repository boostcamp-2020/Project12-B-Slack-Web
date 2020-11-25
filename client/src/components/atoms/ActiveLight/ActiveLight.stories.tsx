import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ActiveLight, ActiveLightProps } from './ActiveLight';

export default {
  title: 'atom/ActiveLight',
  component: ActiveLight
} as Meta;

const Template: Story<ActiveLightProps> = (args) => <ActiveLight {...args} />;

export const LargeActiveLight = Template.bind({});
LargeActiveLight.args = {
  size: 'large'
};

export const MediumActiveLight = Template.bind({});
MediumActiveLight.args = {
  size: 'medium'
};

export const SmallActiveLight = Template.bind({});
SmallActiveLight.args = {
  size: 'small'
};

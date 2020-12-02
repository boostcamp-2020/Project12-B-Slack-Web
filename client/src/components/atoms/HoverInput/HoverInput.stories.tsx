import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HoverInput, HoverInputProps } from './HoverInput';

export default {
  title: 'atom/HoverInput',
  component: HoverInput
} as Meta;

const Template: Story<HoverInputProps> = (args) => <HoverInput {...args} />;

export const BlackHoverInput = Template.bind({});
BlackHoverInput.args = {};

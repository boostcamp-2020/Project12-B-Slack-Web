import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DropMenuBox, DropMenuBoxProps } from './DropMenuBox';

export default {
  title: 'atom/DropMenuBox',
  component: DropMenuBox
} as Meta;

const Template: Story<DropMenuBoxProps> = (args) => <DropMenuBox {...args} />;

export const PrimaryDropMenuBox = Template.bind({});
PrimaryDropMenuBox.args = {};

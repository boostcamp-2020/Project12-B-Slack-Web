import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalBox, ModalBoxProps } from './ModalBox';

export default {
  title: 'atom/ModalBox',
  component: ModalBox
} as Meta;

const Template: Story<ModalBoxProps> = (args) => <ModalBox {...args} />;

export const PrimaryModalBox = Template.bind({});
PrimaryModalBox.args = {};

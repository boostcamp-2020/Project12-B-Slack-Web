import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ChannelModal, ChannelModalProps } from './ChannelModal';

export default {
  title: 'molecules/ChannelModal',
  component: ChannelModal
} as Meta;

const Template: Story<ChannelModalProps> = (args) => <ChannelModal {...args} />;

export const BlackChannelModal = Template.bind({});
BlackChannelModal.args = {};

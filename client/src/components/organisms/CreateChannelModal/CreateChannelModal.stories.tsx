import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CreateChannelModal, CreateChannelModalProps } from './CreateChannelModal';

export default {
  title: 'organisms/CreateChannelModal',
  component: CreateChannelModal
} as Meta;

const Template: Story<CreateChannelModalProps> = (args) => <CreateChannelModal {...args} />;

export const BlackCreateChannelModal = Template.bind({});
BlackCreateChannelModal.args = {};

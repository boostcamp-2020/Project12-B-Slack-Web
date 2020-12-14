import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProfileModal, ProfileModalProps } from './ProfileModal';

export default {
  title: 'molecules/ProfileModal',
  component: ProfileModal
} as Meta;

const Template: Story<ProfileModalProps> = (args) => <ProfileModal {...args} />;

export const BlackProfileModal = Template.bind({});
BlackProfileModal.args = {
  userId: 1,
  profileUri: 'https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4',
  displayName: 'profornnan'
};

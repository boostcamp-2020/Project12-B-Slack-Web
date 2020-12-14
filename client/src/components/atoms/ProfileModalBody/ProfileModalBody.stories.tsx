import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProfileModalBody, ProfileModalBodyProps } from './ProfileModalBody';

export default {
  title: 'atom/ProfileModalBody',
  component: ProfileModalBody
} as Meta;

const Template: Story<ProfileModalBodyProps> = (args) => <ProfileModalBody {...args} />;

export const BlackProfileModalBody = Template.bind({});
BlackProfileModalBody.args = {
  displayName: 'profornnan'
};

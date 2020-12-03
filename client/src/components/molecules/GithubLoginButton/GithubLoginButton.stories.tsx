import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GithubLoginButton, GithubLoginButtonProps } from './GithubLoginButton';

export default {
  title: 'molecules/GithubLoginButton',
  component: GithubLoginButton
} as Meta;

const Template: Story<GithubLoginButtonProps> = (args) => <GithubLoginButton {...args} />;

export const BlackGithubLoginButton = Template.bind({});
BlackGithubLoginButton.args = {};

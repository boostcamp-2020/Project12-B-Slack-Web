import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoginForm, LoginFormProps } from './LoginForm';

export default {
  title: 'organisms/LoginForm',
  component: LoginForm
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const BlackLoginForm = Template.bind({});
BlackLoginForm.args = {};

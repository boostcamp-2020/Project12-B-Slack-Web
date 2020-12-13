import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Actionbar, ActionbarProps } from './Actionbar';

export default {
  title: 'molecules/Actionbar',
  component: Actionbar
} as Meta;

const Template: Story<ActionbarProps> = (args) => <Actionbar {...args} />;

export const BlackActionbar = Template.bind({});
BlackActionbar.args = {
  messageId: 1
};

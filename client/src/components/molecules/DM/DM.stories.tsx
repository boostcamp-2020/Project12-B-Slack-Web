import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DM, DMProps } from './DM';

export default {
  title: 'molecules/DM',
  component: DM
} as Meta;

const Template: Story<DMProps> = (args) => <DM {...args} />;

export const BlackDM = Template.bind({});
BlackDM.args = {
  children: 'J030_김도호'
};

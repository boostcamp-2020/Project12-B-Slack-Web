import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    fontColor: { control: 'color' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ExampleButton = Template.bind({});
ExampleButton.args = {
  children: 'Example'
};

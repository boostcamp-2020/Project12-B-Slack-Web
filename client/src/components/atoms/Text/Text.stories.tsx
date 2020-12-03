import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from './Text';

export default {
  title: 'atom/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' }
  }
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const ExampleText = Template.bind({});
ExampleText.args = {
  children: 'Example'
};

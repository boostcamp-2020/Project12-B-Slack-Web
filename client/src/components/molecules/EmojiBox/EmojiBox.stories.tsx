import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EmojiBox, EmojiBoxProps } from './EmojiBox';

export default {
  title: 'molecules/EmojiBox',
  component: EmojiBox
} as Meta;

const Template: Story<EmojiBoxProps> = (args) => <EmojiBox {...args} />;

export const BlackEmojiBox = Template.bind({});
BlackEmojiBox.args = {
  emoji: '✔',
  number: 1
};

export const HeartEmojiBox = Template.bind({});
HeartEmojiBox.args = {
  emoji: '❤',
  number: 1
};

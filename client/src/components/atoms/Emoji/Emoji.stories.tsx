import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Emoji, EmojiProps } from './Emoji';

export default {
  title: 'atom/Emoji',
  component: Emoji
} as Meta;

const Template: Story<EmojiProps> = (args) => <Emoji {...args} />;

export const GoodEmoji = Template.bind({});
GoodEmoji.args = {
  text: ':+1:'
};

export const HeartEmoji = Template.bind({});
HeartEmoji.args = {
  text: ':heart:'
};

export const CheckEmoji = Template.bind({});
CheckEmoji.args = {
  text: ':white_check_mark:'
};

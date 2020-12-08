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
  text: ':white_check_mark:',
  number: 1
};

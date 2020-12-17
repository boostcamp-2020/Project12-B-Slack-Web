import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EmojiPicker, EmojiPickerProps } from './EmojiPicker';

export default {
  title: 'atom/EmojiPicker',
  component: EmojiPicker
} as Meta;

const Template: Story<EmojiPickerProps> = (args) => <EmojiPicker {...args} />;

export const BlackEmojiPicker = Template.bind({});
BlackEmojiPicker.args = {
  onEmojiClick: () => {}
};

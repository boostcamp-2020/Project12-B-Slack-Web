import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Message, MessageProps } from './Message';

export default {
  title: 'molecules/Message',
  component: Message
} as Meta;

const Template: Story<MessageProps> = (args) => <Message {...args} />;

export const BlackMessage = Template.bind({});
BlackMessage.args = {
  src: 'https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4',
  author: 'J030_김도호',
  content:
    '안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. '
};

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
  src: 'https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4',
  author: 'J030_김도호',
  content:
    '안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. 안녕하세요. 김도호입니다. '
};

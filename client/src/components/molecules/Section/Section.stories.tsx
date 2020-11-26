import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Channel, DM } from '@components/molecules';
import { Section, SectionProps } from './Section';

export default {
  title: 'molecules/Section',
  component: Section
} as Meta;

const mockChannelChildren = ['5주-그룹-프로젝트-슬랙', 'boost-ajae', '어몽어스'].map((item) => {
  return <Channel>{item}</Channel>;
});

const mockDMChildren = ['J003_강동훈', 'J030_김도호', 'J211_탁성건'].map((item) => {
  return <DM>{item}</DM>;
});

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const ChannelSection = Template.bind({});
ChannelSection.args = {
  SectionName: 'Channels',
  children: mockChannelChildren
};

export const DMSection = Template.bind({});
DMSection.args = {
  SectionName: 'Direct Messages',
  children: mockDMChildren
};

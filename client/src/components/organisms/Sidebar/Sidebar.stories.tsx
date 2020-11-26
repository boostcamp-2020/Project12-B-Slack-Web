import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Channel, DM, Section } from '@components/molecules';
import { Sidebar, SidebarProps } from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar
} as Meta;

const mockChannelChildren = ['5주-그룹-프로젝트-슬랙', 'boost-ajae', '어몽어스'].map((item) => {
  return <Channel>{item}</Channel>;
});

const mockDMChildren = ['J003_강동훈', 'J030_김도호', 'J211_탁성건'].map((item) => {
  return <DM>{item}</DM>;
});

const mockChildren = [
  <Section SectionName="Channels">{mockChannelChildren}</Section>,
  <Section SectionName="Direct Messages">{mockDMChildren}</Section>
];

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const BlackSidebar = Template.bind({});
BlackSidebar.args = {
  children: mockChildren
};

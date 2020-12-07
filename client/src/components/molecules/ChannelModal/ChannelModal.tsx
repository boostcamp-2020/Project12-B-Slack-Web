import React from 'react';
import { DropMenuBox, DropMenuItem } from '@components/atoms';

interface ChannelModalProps {}

const ChannelModal: React.FC<ChannelModalProps> = ({ ...props }) => {
  return (
    <DropMenuBox {...props}>
      <DropMenuItem> Browse channels </DropMenuItem>
      <DropMenuItem> Create a channel </DropMenuItem>
    </DropMenuBox>
  );
};

export { ChannelModal, ChannelModalProps };

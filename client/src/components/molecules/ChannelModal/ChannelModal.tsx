import React from 'react';
import { DropMenuBox, DropMenuItem } from '@components/atoms';

interface ChannelModalProps {
  onClick?: () => void;
}

const handlingBrowseChannelsClick = () => {};
const handlingCreateChannelClick = () => {};

const ChannelModal: React.FC<ChannelModalProps> = ({ onClick, ...props }) => {
  return (
    <DropMenuBox onClick={onClick} {...props}>
      <DropMenuItem onClick={handlingBrowseChannelsClick}> Browse channels </DropMenuItem>
      <DropMenuItem onClick={handlingCreateChannelClick}> Create a channel </DropMenuItem>
    </DropMenuBox>
  );
};

export { ChannelModal, ChannelModalProps };

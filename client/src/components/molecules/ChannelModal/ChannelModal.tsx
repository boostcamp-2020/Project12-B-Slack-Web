import React from 'react';
import { DropMenuBox, DropMenuItem } from '@components/atoms';

interface ChannelModalProps {
  setIsChannelModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChannelModal: React.FC<ChannelModalProps> = ({ setIsChannelModalOpened, ...props }) => {
  const handlingBrowseChannelsClick = () => {
    setIsChannelModalOpened(false);
  };
  const handlingCreateChannelClick = () => {
    setIsChannelModalOpened(false);
  };
  return (
    <DropMenuBox onClick={() => setIsChannelModalOpened(false)} {...props}>
      <DropMenuItem onClick={handlingBrowseChannelsClick}> Browse channels </DropMenuItem>
      <DropMenuItem onClick={handlingCreateChannelClick}> Create a channel </DropMenuItem>
    </DropMenuBox>
  );
};

export { ChannelModal, ChannelModalProps };

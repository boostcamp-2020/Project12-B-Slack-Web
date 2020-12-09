import React from 'react';
import { DropMenuBox, DropMenuItem } from '@components/atoms';
import { useDispatch } from 'react-redux';
import { createModalOpen } from '@store/actions/modal-action';

interface ChannelModalProps {
  handlingCloseModal: () => void;
}

const ChannelModal: React.FC<ChannelModalProps> = ({ handlingCloseModal, ...props }) => {
  const dispatch = useDispatch();
  const handlingBrowseChannelsClick = () => {
    handlingCloseModal();
  };
  const handlingCreateChannelClick = () => {
    dispatch(createModalOpen());
    handlingCloseModal();
  };
  return (
    <>
      <DropMenuBox onClick={() => handlingCloseModal()} {...props}>
        <DropMenuItem onClick={handlingBrowseChannelsClick}> Browse channels </DropMenuItem>
        <DropMenuItem onClick={handlingCreateChannelClick}> Create a channel </DropMenuItem>
      </DropMenuBox>
    </>
  );
};

export { ChannelModal, ChannelModalProps };

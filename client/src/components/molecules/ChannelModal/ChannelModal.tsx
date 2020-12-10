import React from 'react';
import { DropMenuBox, DropMenuItem } from '@components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { createModalOpen, channelModalClose } from '@store/actions/modal-action';

interface ChannelModalProps {}

const ChannelModal: React.FC<ChannelModalProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store: any) => store.modal.channelModal.isOpen);
  const handlingCloseModal = () => {
    dispatch(channelModalClose());
  };
  const handlingBrowseChannelsClick = () => {
    dispatch(channelModalClose());
  };
  const handlingCreateChannelClick = () => {
    dispatch(createModalOpen());
  };
  return (
    <>
      {isOpen ? (
        <DropMenuBox onClick={() => handlingCloseModal()} {...props}>
          <DropMenuItem onClick={handlingBrowseChannelsClick}> Browse channels </DropMenuItem>
          <DropMenuItem onClick={handlingCreateChannelClick}> Create a channel </DropMenuItem>
        </DropMenuBox>
      ) : null}
    </>
  );
};

export { ChannelModal, ChannelModalProps };

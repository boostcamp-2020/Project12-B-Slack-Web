import React from 'react';
import { DropMenuBox, DropMenuItem } from '@components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createModalOpen, channelModalClose } from '@store/actions/modal-action';
import { resetSelectedChannel } from '@store/actions/chatroom-action';
import styled from 'styled-components';

interface ChannelModalProps {}

const DropMenuItemContainer = styled.div`
  padding: 1rem 0rem;
`;

const ChannelModal: React.FC<ChannelModalProps> = ({ ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { x, y } = useSelector((store: any) => store.modal.channelModal);

  const isOpen = useSelector((store: any) => store.modal.channelModal.isOpen);

  const handlingCloseModal = () => {
    dispatch(channelModalClose());
  };
  const handlingBrowseChannelsClick = () => {
    if (window.location.pathname !== `/channel-browser`) history.push(`/channel-browser`);
    dispatch(resetSelectedChannel());

    dispatch(channelModalClose());
  };
  const handlingCreateChannelClick = () => {
    dispatch(createModalOpen());
  };
  return (
    <>
      {isOpen ? (
        <DropMenuBox x={x} y={y} onClick={() => handlingCloseModal()} {...props}>
          <DropMenuItemContainer>
            <DropMenuItem onClick={handlingBrowseChannelsClick}> Browse channels </DropMenuItem>
            <DropMenuItem onClick={handlingCreateChannelClick}> Create a channel </DropMenuItem>
          </DropMenuItemContainer>
        </DropMenuBox>
      ) : null}
    </>
  );
};

export { ChannelModal, ChannelModalProps };

import React from 'react';
import styled from 'styled-components';
import { DropMenuBox, ProfileModalImg, Button, ProfileModalBody } from '@components/atoms';
import { color } from '@theme/index';
import { useDispatch, useSelector } from 'react-redux';
import { profileModalClose, userboxModalClose } from '@store/actions/modal-action';
import { addDM, pickChannel } from '@store/actions/chatroom-action';
import { DMState } from '@store/types/chatroom-types';

interface ProfileModalProps {}

const ProfileModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
`;

const MessageButtonWrap = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

const ProfileModal: React.FC<ProfileModalProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { x, y, userId, profileUri, displayName } = useSelector((state: any) => state.modal.profileModal);
  const { directMessages } = useSelector((state: any) => state.chatroom);
  const isOpen = useSelector((store: any) => store.modal.profileModal.isOpen);

  const handlingCloseModal = () => {
    dispatch(profileModalClose());
  };

  const findDirectMessageByTitle = (title: string): DMState => {
    return directMessages.find((directMessage: DMState) => directMessage.title === title);
  };

  const handlingMessageButtonClick = () => {
    dispatch(profileModalClose());
    dispatch(userboxModalClose());
    const directMessage = findDirectMessageByTitle(displayName);
    if (directMessage) {
      dispatch(pickChannel({ selectedChatroomId: directMessage.chatroomId }));
      return;
    }
    dispatch(addDM({ invitedUserId: userId }));
  };

  return (
    <>
      {isOpen && (
        <DropMenuBox x={x} y={y} onClick={() => handlingCloseModal()} {...props}>
          <ProfileModalWrap>
            <ProfileModalImg profileUri={profileUri} />
            <ProfileModalBody displayName={displayName} />
            <MessageButtonWrap>
              <Button
                backgroundColor={color.modal_bg_inner_secondary}
                borderColor={color.secondary}
                fontColor={color.primary}
                width="100%"
                height="2rem"
                onClick={handlingMessageButtonClick}
                {...props}>
                Message
              </Button>
            </MessageButtonWrap>
          </ProfileModalWrap>
        </DropMenuBox>
      )}
    </>
  );
};

export { ProfileModal, ProfileModalProps };

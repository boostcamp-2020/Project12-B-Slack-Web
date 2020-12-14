import React from 'react';
import styled from 'styled-components';
import { DropMenuBox, ProfileModalImg, Button, ProfileModalBody } from '@components/atoms';
import { color } from '@theme/index';
import { useDispatch, useSelector } from 'react-redux';
import { profileModalClose } from '@store/actions/modal-action';

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
  const { userId, profileUri, displayName } = useSelector((state: any) => state.modal.profileModal);
  const { x, y } = useSelector((store: any) => store.modal.profileModal);
  const isOpen = useSelector((store: any) => store.modal.profileModal.isOpen);

  const handlingCloseModal = () => {
    dispatch(profileModalClose());
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

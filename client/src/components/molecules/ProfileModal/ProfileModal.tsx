import React from 'react';
import styled from 'styled-components';
import { DropMenuBox, ProfileModalImg, Button, ProfileModalBody } from '@components/atoms';
import { color } from '@theme/index';

interface ProfileModalProps {
  userId: number;
  profileUri: string;
  displayName: string;
}

const ProfileModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
`;

const MessageButtonWrap = styled.div`
  padding: 0 1rem;
`;

const ProfileModal: React.FC<ProfileModalProps> = ({ userId, profileUri, displayName, ...props }) => {
  const handlingCloseModal = () => {};

  return (
    <DropMenuBox onClick={() => handlingCloseModal()} {...props}>
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
  );
};

export { ProfileModal, ProfileModalProps };

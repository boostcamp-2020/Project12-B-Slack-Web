import React from 'react';
import styled from 'styled-components';
import { ModalBox, Text } from '@components/atoms';
import { color } from '@theme/index';
import { UserBoxModalSearchBar, UserBoxModalUserItem } from '@components/molecules';
import { useDispatch, useSelector } from 'react-redux';
import { userboxModalClose } from '@store/actions/modal-action';
import { Size } from '@constants/index';

interface UserBoxModalProps {}

const UserBoxModalHeader = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  height: 7rem;
`;

const UserBoxModalBody = styled.div<any>`
  overflow-y: scroll;
  padding: 0rem 1rem;
  max-height: 18rem;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserBoxModal: React.FC<UserBoxModalProps> = () => {
  const { users, title } = useSelector((state: any) => state.chatroom.selectedChatroom);
  const isOpen = useSelector((state: any) => state.modal.userboxModal.isOpen);
  const dispatch = useDispatch();

  const createUser = () => {
    return users.map((member: any) => <UserBoxModalUserItem key={member.userId} user={member} />);
  };

  return (
    <>
      {isOpen ? (
        <ModalBox onClick={() => dispatch(userboxModalClose())}>
          <UserBoxModalHeader>
            <Text fontColor={color.primary} size={Size.MEDIUM} isBold>
              {`${users.length} members in #${title}`}
            </Text>
            <Text fontColor={color.text_septenary} size={Size.SMALL} isBold>
              Add People
            </Text>
            <UserBoxModalSearchBar />
          </UserBoxModalHeader>
          <UserBoxModalBody>{createUser()}</UserBoxModalBody>
        </ModalBox>
      ) : null}
    </>
  );
};

export { UserBoxModal, UserBoxModalProps };

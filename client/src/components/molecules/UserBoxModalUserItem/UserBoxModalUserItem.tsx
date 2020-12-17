import React from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { color } from '@theme/index';
import { openProfileModal } from '@utils/modal';

interface User {
  displayName: string;
  profileUri: string;
  userId: number;
}

interface UserBoxModalUserItemProps {
  user: User;
}

const UserBoxModalUserItemContainer = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const ProfileImgWrap = styled.div<any>`
  cursor: pointer;
`;

const TextWrap = styled.div<any>`
  margin-left: 0.5rem;
  cursor: pointer;
`;

const UserBoxModalUserItem: React.FC<UserBoxModalUserItemProps> = ({ user, ...props }) => {
  return (
    <UserBoxModalUserItemContainer {...props}>
      <ProfileImgWrap onClick={openProfileModal(user)}>
        <ProfileImg size="large" src={user.profileUri} />
      </ProfileImgWrap>
      <TextWrap onClick={openProfileModal(user)}>
        <Text fontColor={color.primary} size="small" isBold isHover>
          {user.displayName}
        </Text>
      </TextWrap>
    </UserBoxModalUserItemContainer>
  );
};

export { UserBoxModalUserItem, UserBoxModalUserItemProps };

import React from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { color } from '@theme/index';
import { openProfileModal } from '@utils/modal';
import { Size } from '@constants/index';

interface User {
  displayName: string;
  profileUri: string;
  userId: number;
}

interface UserBoxModalUserItemProps {
  user: User;
}

const UserBoxModalUserItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const ProfileImgWrap = styled.div`
  cursor: pointer;
`;

const TextWrap = styled.div`
  margin-left: 0.5rem;
  cursor: pointer;
`;

const UserBoxModalUserItem: React.FC<UserBoxModalUserItemProps> = ({ user, ...props }) => {
  return (
    <UserBoxModalUserItemContainer {...props}>
      <ProfileImgWrap onClick={openProfileModal(user)}>
        <ProfileImg size={Size.LARGE} src={user.profileUri} />
      </ProfileImgWrap>
      <TextWrap onClick={openProfileModal(user)}>
        <Text fontColor={color.primary} size={Size.SMALL} isBold isHover>
          {user.displayName}
        </Text>
      </TextWrap>
    </UserBoxModalUserItemContainer>
  );
};

export { UserBoxModalUserItem, UserBoxModalUserItemProps };

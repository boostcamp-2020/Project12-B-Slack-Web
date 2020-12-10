import React from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { color } from '@theme/index';

interface UserBoxModalUserItemProps {
  src: string;
  author: string;
}

const UserBoxModalUserItemContainer = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const TextWrap = styled.div<any>`
  margin-left: 0.5rem;
`;

const UserBoxModalUserItem: React.FC<UserBoxModalUserItemProps> = ({ author, src, ...props }) => {
  return (
    <UserBoxModalUserItemContainer {...props}>
      <ProfileImg size="large" src={src} />
      <TextWrap>
        <Text fontColor={color.primary} size="small" isBold>
          {author}
        </Text>
      </TextWrap>
    </UserBoxModalUserItemContainer>
  );
};

export { UserBoxModalUserItem, UserBoxModalUserItemProps };

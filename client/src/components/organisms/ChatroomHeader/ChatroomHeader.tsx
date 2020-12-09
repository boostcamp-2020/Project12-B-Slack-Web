import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@components/atoms';
import { UserBox, HoverIcon } from '@components/molecules';
import BlueStar from '@imgs/star-blue.png';
import { color } from '@theme/index';
import userIcon from '@imgs/user-icon.png';
import DetailIcon from '@imgs/detail-icon.png';

interface ChatroomHeaderProps {
  title: string;
  users: Array<object>;
}

const ChatroomHeaderContainter = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 100%;
  box-shadow: 0 2px 2px -2px ${color.border_primary};
  background-color: ${color.tertiary};
  z-index: 2;
`;

const TextContainer = styled.div<any>`
  display: flex;
  align-items: baseline;
  padding: 0rem 1rem;
`;

const IconWrap = styled.div<any>`
  margin-left: 0.5rem;
`;

const MenuContainer = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 9rem;
  padding: 0rem 1rem;
`;

const ChatroomHeader: React.FC<ChatroomHeaderProps> = ({ title, users, ...props }) => {
  return (
    <ChatroomHeaderContainter {...props}>
      <TextContainer>
        <Text size="small" fontColor={color.primary} isBold={true}>{`# ${title}`}</Text>
        <IconWrap>
          <Icon size="small" src={BlueStar} isHover={false} />
        </IconWrap>
      </TextContainer>
      <MenuContainer>
        <UserBox member={users} />
        <HoverIcon size="medium" src={userIcon} />
        <HoverIcon size="medium" src={DetailIcon} />
      </MenuContainer>
    </ChatroomHeaderContainter>
  );
};

export { ChatroomHeader, ChatroomHeaderProps };

import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@components/atoms';
import { UserBox, HoverIcon } from '@components/molecules';
import BlueStar from '@imgs/star-blue.png';
import { color } from '@theme/index';
import userIcon from '@imgs/user-icon.png';
import DetailIcon from '@imgs/detail-icon.png';
import { Size } from '@constants/index';

interface ChatroomHeaderProps {
  title: string;
  users: Array<object>;
}

const ChatroomHeaderContainter = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  box-shadow: 0 3px 2px -2px ${color.border_primary};
  background-color: ${color.tertiary};
  z-index: 2;
`;

const TitleContainer = styled.div<any>`
  display: flex;
  align-items: baseline;
  padding: 0rem 1rem;
`;

const TextWrap = styled.div<any>`
  display: grid;
`;

const IconWrap = styled.div<any>`
  margin-left: 0.5rem;
`;

const MenuContainer = styled.div<any>`
  display: flex;
  align-items: baseline;
  padding: 0rem 1rem;
`;

const ChatroomHeader: React.FC<ChatroomHeaderProps> = ({ title, users, ...props }) => {
  return (
    <ChatroomHeaderContainter {...props}>
      <TitleContainer>
        <TextWrap>
          <Text size={Size.SMALL} fontColor={color.primary} isBold={true} isEllipsis>{`# ${title}`}</Text>
        </TextWrap>
        <IconWrap>
          <Icon size={Size.SMALL} src={BlueStar} isHover={false} />
        </IconWrap>
      </TitleContainer>
      <MenuContainer>
        <UserBox member={users} />
        <IconWrap>
          <HoverIcon size={Size.MEDIUM} src={userIcon} />
        </IconWrap>
        <IconWrap>
          <HoverIcon size={Size.MEDIUM} src={DetailIcon} />
        </IconWrap>
      </MenuContainer>
    </ChatroomHeaderContainter>
  );
};

export { ChatroomHeader, ChatroomHeaderProps };

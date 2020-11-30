import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@components/atoms';
import BlueStar from '@imgs/star-blue.png';

interface ChatroomHeaderProps {
  children: React.ReactNode;
  title: string;
}

const ChatroomHeaderContainter = styled.div<any>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10%;
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
`;

const TextContainer = styled.div<any>`
  display: flex;
  align-items: baseline;
  padding: 0rem 1rem;
`;

const IconWrap = styled.div<any>`
  margin-left: 0.5rem;
`;

const ChatroomHeader: React.FC<ChatroomHeaderProps> = ({ children, title, ...props }) => {
  return (
    <ChatroomHeaderContainter {...props}>
      <TextContainer>
        <Text size="small" color="black" isBold={true}>{`# ${title}`}</Text>
        <IconWrap>
          <Icon size="small" src={BlueStar} isHover={false} />
        </IconWrap>
      </TextContainer>
    </ChatroomHeaderContainter>
  );
};

export { ChatroomHeader, ChatroomHeaderProps };

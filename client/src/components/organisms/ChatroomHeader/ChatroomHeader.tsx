import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@components/atoms';
import BlueStar from '@imgs/star-blue.png';
import { color } from '@theme/index';

interface ChatroomHeaderProps {
  title: string;
}

const ChatroomHeaderContainter = styled.div<any>`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10%;
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
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

const ChatroomHeader: React.FC<ChatroomHeaderProps> = ({ title, ...props }) => {
  return (
    <ChatroomHeaderContainter {...props}>
      <TextContainer>
        <Text size="small" fontColor={color.primary} isBold={true}>{`# ${title}`}</Text>
        <IconWrap>
          <Icon size="small" src={BlueStar} isHover={false} />
        </IconWrap>
      </TextContainer>
    </ChatroomHeaderContainter>
  );
};

export { ChatroomHeader, ChatroomHeaderProps };

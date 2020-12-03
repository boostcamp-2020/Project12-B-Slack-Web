import React from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { color } from '@theme/index';

interface MessageProps {
  src: string;
  author: string;
  content: string;
}

const MessageContainer = styled.div<any>`
  display: flex;
  padding: 1rem 1rem;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const ProfileImgWrap = styled.div<any>`
  width: 5rem;
`;

const MessageContent = styled.div<any>`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

const MessageHeader = styled.div<any>`
  display: flex;
`;

const Message: React.FC<MessageProps> = ({ author, content, src, ...props }) => {
  return (
    <MessageContainer {...props}>
      <ProfileImgWrap>
        <ProfileImg size="large" src={src} />
      </ProfileImgWrap>
      <MessageContent>
        <MessageHeader>
          <Text fontColor={color.primary} size="small" isBold={true}>
            {author}
          </Text>
        </MessageHeader>
        <Text fontColor={color.primary} size="small">
          {content}
        </Text>
      </MessageContent>
    </MessageContainer>
  );
};

export { Message, MessageProps };

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { Actionbar } from '@components/molecules';
import { color } from '@theme/index';
import { getTimeConversionValue } from '@utils/time';

interface MessageProps {
  src: string;
  author: string;
  content: string;
  createdAt: Date;
}

const MessageContainer = styled.div<any>`
  display: flex;
  position: relative;
  padding: 1rem 1rem;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const ProfileImgWrap = styled.div<any>`
  margin-right: 1.5rem;
`;

const MessageContent = styled.div<any>`
  display: flex;
  flex-direction: column;
`;

const MessageHeader = styled.div<any>`
  display: flex;
  align-items: center;
`;

const DateText = styled.p<any>`
  margin: 0 0.3rem;
  color: gray;
  font-size: 0.7rem;
`;

const Message: React.FC<MessageProps> = ({ author, content, src, createdAt, ...props }) => {
  const [isHover, setHover] = useState(false);
  const messageContainer = useRef();
  const onMouseEnter = (e: any) => {
    if (e.target === messageContainer.current) {
      setHover(true);
    }
  };
  const onMouseLeave = (e: any) => {
    if (e.target === messageContainer.current) {
      setHover(false);
    }
  };
  return (
    <MessageContainer ref={messageContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
      <ProfileImgWrap>
        <ProfileImg size="large" src={src} />
      </ProfileImgWrap>
      <MessageContent>
        <MessageHeader>
          <Text fontColor={color.primary} size="small" isBold={true}>
            {author}
          </Text>
          <DateText> {getTimeConversionValue(createdAt)}</DateText>
        </MessageHeader>
        <Text fontColor={color.primary} size="small">
          {content}
        </Text>
      </MessageContent>
      {isHover ? <Actionbar /> : null}
    </MessageContainer>
  );
};

export { Message, MessageProps };

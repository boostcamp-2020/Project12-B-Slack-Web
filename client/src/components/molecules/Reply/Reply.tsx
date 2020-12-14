import { RootState } from '@store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { color } from '@theme/index';
import { getTimeConversionValue } from '@utils/time';

interface ReplyProps {
  reply: any;
}

const ReplyContainter = styled.div<any>`
  display: flex;
  position: relative;
  padding: 1rem 1rem;
  word-break: break-all;
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

const Reply: React.FC<ReplyProps> = ({ reply }) => {
  return (
    <ReplyContainter>
      <ProfileImgWrap>
        <ProfileImg size="large" src={reply.user.profileUri} />
      </ProfileImgWrap>
      <MessageContent>
        <MessageHeader>
          <Text fontColor={color.primary} size="small" isBold={true}>
            {reply.user.displayName}
          </Text>
          <DateText> {getTimeConversionValue(reply.createdAt)}</DateText>
        </MessageHeader>
        <Text fontColor={color.primary} size="small">
          {reply.content}
        </Text>
      </MessageContent>
    </ReplyContainter>
  );
};

export { Reply, ReplyProps };

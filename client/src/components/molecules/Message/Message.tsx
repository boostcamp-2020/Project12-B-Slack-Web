import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { Actionbar, MessageReplyBar } from '@components/molecules';
import { color } from '@theme/index';
import { getTimeConversionValue } from '@utils/time';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadThread } from '@store/actions/thread-action';

interface MessageProps {
  src: string;
  author: string;
  content: string;
  messageId: number;
  createdAt: Date;
  thread: any;
}

const MessageContainer = styled.div<any>`
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

const Message: React.FC<MessageProps> = ({ messageId, author, thread, content, src, createdAt, ...props }) => {
  const [isHover, setHover] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const chatroomId = useSelector((state: any) => state.chatroom.selectedChatroomId);
  const messageContainer = useRef();
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  const clickThread = () => {
    dispatch(loadThread(messageId));
    history.push(`/client/${chatroomId}/thread/${messageId}`);
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
        {thread.replyCount !== 0 && (
          <MessageReplyBar
            profileImgs={thread.profileUris}
            replyCount={thread.replyCount}
            lastRepliedTime={new Date(thread.lastReplyAt)}
            onClick={clickThread}
          />
        )}
      </MessageContent>
      {isHover ? <Actionbar messageId={messageId} {...props} /> : null}
    </MessageContainer>
  );
};

export { Message, MessageProps };

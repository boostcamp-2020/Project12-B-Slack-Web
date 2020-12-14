import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { Actionbar, MessageReplyBar } from '@components/molecules';
import { color } from '@theme/index';
import { getTimeConversionValue } from '@utils/time';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadThread } from '@store/actions/thread-action';
import { profileModalOpen } from '@store/actions/modal-action';

interface MessageProps {
  src: string;
  author: string;
  content: string;
  messageId: number;
  createdAt: Date;
  thread: any;
  user: { userId: number; profileUri: string; displayName: string };
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
  cursor: pointer;
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

const Message: React.FC<MessageProps> = ({ messageId, author, thread, content, src, createdAt, user, ...props }) => {
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
  const clickProfileImg = (e: any) => {
    const x = window.pageXOffset + e.target.getBoundingClientRect().left;
    const y = window.pageYOffset + e.target.getBoundingClientRect().top;
    const { userId, profileUri, displayName } = user;
    dispatch(profileModalOpen({ x, y, userId, profileUri, displayName }));
  };
  return (
    <MessageContainer ref={messageContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
      <ProfileImgWrap onClick={clickProfileImg}>
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

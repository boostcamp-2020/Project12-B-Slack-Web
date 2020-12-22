import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { Actionbar, MessageReplyBar } from '@components/molecules';
import { color } from '@theme/index';
import { getTimeConversionValue } from '@utils/time';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadThread } from '@store/actions/thread-action';
import { ReactionsState } from '@store/types/reactions-type';
import { RootState } from '@store/reducers';
import { openProfileModal } from '@utils/modal';
import { createMessageReaction, deleteMessageReaction } from '@socket/emits/reaction';
import { Size } from '@constants/index';
import { EmojiBox } from '../EmojiBox/EmojiBox';

interface MessageProps {
  src: string;
  author: string;
  content: string;
  messageId: number;
  createdAt: Date;
  thread: any;
  user: { userId: number; profileUri: string; displayName: string };
  messageReactions: Array<ReactionsState>;
}

const MessageContainer = styled.div`
  display: flex;
  position: relative;
  padding: 1rem 1rem;
  word-break: break-all;
  &:hover {
    background-color: ${color.hover_primary};
  }
`;

const ProfileImgWrap = styled.div`
  margin-right: 1.5rem;
  cursor: pointer;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
`;

const DateText = styled.p`
  margin: 0 0.3rem;
  color: ${color.text_senary};
  font-size: 0.7rem;
`;

const AuthorWrap = styled.div`
  cursor: pointer;
`;

const EmojiBoxWrap = styled.div`
  display: flex;
  margin-top: 0.3rem;
`;

const Message: React.FC<MessageProps> = ({ messageId, author, thread, content, src, createdAt, user, messageReactions, ...props }) => {
  const [isHover, setHover] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedChatroomId } = useSelector((state: any) => state.chatroom);
  const userName = useSelector((store: RootState) => store.user.displayName);
  const messageContainer = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  const clickThread = () => {
    dispatch(loadThread({ messageId }));
    history.push(`/client/${selectedChatroomId}/thread/${messageId}`);
  };
  const createReaction = (title: string, emoji: string) => {
    createMessageReaction({ messageId, title, emoji });
  };
  const deleteReaction = (reactionId: number) => {
    deleteMessageReaction({ messageId, reactionId });
  };

  const createEmojiBox = () => {
    const EmojiBoxs = messageReactions.map((reaction) => {
      return (
        reaction.reactionCount !== 0 && (
          <EmojiBox
            key={reaction.reactionId}
            emoji={reaction.emoji}
            number={reaction.reactionCount}
            active={reaction.reactionDisplayNames.includes(userName)}
            reactionId={reaction.reactionId}
            createReaction={createReaction}
            deleteReaction={deleteReaction}
            title={reaction.title}
          />
        )
      );
    });
    return <EmojiBoxWrap>{EmojiBoxs}</EmojiBoxWrap>;
  };

  return (
    <MessageContainer ref={messageContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
      <ProfileImgWrap onClick={openProfileModal(user)}>
        <ProfileImg size={Size.LARGE} src={src} />
      </ProfileImgWrap>
      <MessageContent>
        <MessageHeader>
          <AuthorWrap onClick={openProfileModal(user)}>
            <Text fontColor={color.primary} size={Size.SMALL} isBold={true} isHover={true}>
              {author}
            </Text>
          </AuthorWrap>
          <DateText> {getTimeConversionValue(createdAt)}</DateText>
        </MessageHeader>
        <Text fontColor={color.primary} size={Size.SMALL}>
          {content}
        </Text>
        {createEmojiBox()}
        {thread.replyCount !== 0 && (
          <MessageReplyBar
            profileImgs={thread.profileUris}
            replyCount={thread.replyCount}
            lastRepliedTime={new Date(thread.lastReplyAt)}
            onClick={clickThread}
          />
        )}
      </MessageContent>
      {isHover && <Actionbar chatId={messageId} />}
    </MessageContainer>
  );
};

export { Message, MessageProps };

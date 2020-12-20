import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { color } from '@theme/index';
import { getTimeConversionValue } from '@utils/time';
import { openProfileModal } from '@utils/modal';
import { ChatType, Size } from '@constants/index';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
import { createReplyReaction, deleteReplyReaction } from '@socket/emits/reaction';
import { Actionbar } from '../Actionbar/Actionbar';
import { EmojiBox } from '../EmojiBox/EmojiBox';

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
  cursor: pointer;
`;

const AuthorWrap = styled.div`
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

const EmojiBoxWrap = styled.div`
  display: flex;
  margin-top: 0.3rem;
`;

const Reply: React.FC<ReplyProps> = ({ reply }) => {
  const [isHover, setHover] = useState(false);
  const { replyId, replyReactions } = reply;
  const userName = useSelector((store: RootState) => store.user.displayName);
  const replyContainterEl = useRef();
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  const createReaction = (title: string, emoji: string) => {
    createReplyReaction({ replyId, title, emoji });
  };
  const deleteReaction = (reactionId: number) => {
    deleteReplyReaction({ replyId, reactionId });
  };

  const createEmojiBox = () => {
    if (replyReactions === undefined) return <></>;

    const EmojiBoxs = replyReactions.map((reaction: any) => {
      return (
        reaction.replyDisplayNames.length !== 0 && (
          <EmojiBox
            key={reaction.reactionId}
            emoji={reaction.emoji}
            number={reaction.replyDisplayNames.length}
            active={reaction.replyDisplayNames.includes(userName)}
            reactionId={reaction.reactionId}
            title={reaction.title}
            createReaction={createReaction}
            deleteReaction={deleteReaction}
          />
        )
      );
    });
    return <EmojiBoxWrap>{EmojiBoxs}</EmojiBoxWrap>;
  };
  return (
    <ReplyContainter ref={replyContainterEl} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ProfileImgWrap onClick={openProfileModal(reply.user)}>
        <ProfileImg size={Size.LARGE} src={reply.user.profileUri} />
      </ProfileImgWrap>
      <MessageContent>
        <MessageHeader>
          <AuthorWrap onClick={openProfileModal(reply.user)}>
            <Text fontColor={color.primary} size={Size.SMALL} isBold={true} isHover={true}>
              {reply.user.displayName}
            </Text>
          </AuthorWrap>
          <DateText> {getTimeConversionValue(reply.createdAt)}</DateText>
        </MessageHeader>
        <Text fontColor={color.primary} size={Size.SMALL}>
          {reply.content}
        </Text>
        {createEmojiBox()}
      </MessageContent>
      {isHover && <Actionbar chatId={replyId} actionbarType={ChatType.Reply} />}
    </ReplyContainter>
  );
};

export { Reply, ReplyProps };

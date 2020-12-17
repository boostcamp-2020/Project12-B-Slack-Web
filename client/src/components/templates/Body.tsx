import React, { useEffect } from 'react';
import styled from 'styled-components';
import { channelModalClose, emojiPickerClose, profileModalClose } from '@store/actions/modal-action';
import { useDispatch } from 'react-redux';
import {
  insertMessage,
  updateThread,
  createMessageReaction,
  deleteMessageReaction,
  joinDM,
  updateLeaveChatroom
} from '@store/actions/chatroom-action';
import socket from '@socket/socketIO';
import { CREATE_MESSAGE } from '@socket/types/message-types';
import { CREATE_REPLY } from '@socket/types/thread-types';
import { InsertReply } from '@store/actions/thread-action';
import { socketMessageReactionState, CREATE_MESSAGE_REACTION, DELETE_MESSAGE_REACTION } from '@socket/types/reaction-types';
import { JOIN_DM, LEAVE_CHANNEL } from '@socket/types/chatroom-types';

const StyledBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Body: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on(CREATE_MESSAGE, (message: any) => {
      dispatch(insertMessage(message));
    });
    socket.on(CREATE_REPLY, (reply: any) => {
      dispatch(InsertReply(reply));
      dispatch(updateThread({ messageId: reply.messageId, profileUri: reply.user.profileUri }));
    });
    socket.on(CREATE_MESSAGE_REACTION, (reaction: socketMessageReactionState) => {
      dispatch(createMessageReaction(reaction));
    });
    socket.on(DELETE_MESSAGE_REACTION, (reaction: any) => {
      dispatch(deleteMessageReaction(reaction));
    });
    socket.on(JOIN_DM, (directMessage: any) => {
      dispatch(joinDM({ chatroomId: directMessage.chatroomId }));
    });
    socket.on(LEAVE_CHANNEL, (chatroom: any) => {
      dispatch(updateLeaveChatroom(chatroom));
    });
  }, []);
  const handlingLeave = () => {
    dispatch(channelModalClose());
    dispatch(profileModalClose());
    dispatch(emojiPickerClose());
  };
  return <StyledBody onMouseLeave={handlingLeave}>{children}</StyledBody>;
};

export default Body;

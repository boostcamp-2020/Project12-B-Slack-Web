import React, { useEffect } from 'react';
import styled from 'styled-components';
import { channelModalClose } from '@store/actions/modal-action';
import { useDispatch } from 'react-redux';
import { insertMessage, updateThread } from '@store/actions/chatroom-action';
import socket from '@socket/socketIO';
import { CREATE_MESSAGE } from '@socket/types/message-types';
import { CREATE_REPLY } from '@socket/types/thread-types';
import { InsertReply } from '@store/actions/thread-action';

const StyledBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Body: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on(CREATE_MESSAGE, (message: any) => {
      dispatch(
        insertMessage({
          messageId: message.id,
          createAt: new Date(),
          updateAt: new Date(),
          user: message.user,
          messageReactions: [],
          thread: {
            replyCount: 0,
            lastReplyAt: null,
            profileUris: [],
            files: []
          },
          chatroomId: message.chatroomId
        })
      );
    });
    socket.on(CREATE_REPLY, (reply: any) => {
      dispatch(InsertReply(reply));
      dispatch(updateThread({ messageId: reply.messageId, profileUri: reply.user.profileUri }));
    });
  }, []);
  const handlingLeave = () => {
    dispatch(channelModalClose());
  };
  return <StyledBody onMouseLeave={handlingLeave}>{children}</StyledBody>;
};

export default Body;

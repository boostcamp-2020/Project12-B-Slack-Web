import React, { useEffect } from 'react';
import styled from 'styled-components';
import { channelModalClose, profileModalClose } from '@store/actions/modal-action';
import { useDispatch } from 'react-redux';
import { insertMessage, joinDM, updateThread } from '@store/actions/chatroom-action';
import socket from '@socket/socketIO';
import { CREATE_MESSAGE } from '@socket/types/message-types';
import { CREATE_REPLY } from '@socket/types/thread-types';
import { InsertReply } from '@store/actions/thread-action';
import { JOIN_DM } from '@socket/types/chatroom-types';

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
    socket.on(JOIN_DM, (directMessage: any) => {
      dispatch(joinDM({ chatroomId: directMessage.chatroomId }));
    });
  }, []);
  const handlingLeave = () => {
    dispatch(channelModalClose());
    dispatch(profileModalClose());
  };
  return <StyledBody onMouseLeave={handlingLeave}>{children}</StyledBody>;
};

export default Body;

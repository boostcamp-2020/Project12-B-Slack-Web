import React, { useEffect } from 'react';
import styled from 'styled-components';
import { channelModalClose } from '@store/actions/modal-action';
import { useDispatch } from 'react-redux';
import { insertMessage } from '@store/actions/chatroom-action';
import socket from '@socket/socketIO';

const StyledBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Body: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on('create message', (message: any) => {
      dispatch(insertMessage(message));
    });
  }, []);
  const handlingLeave = () => {
    dispatch(channelModalClose());
  };
  return <StyledBody onMouseLeave={handlingLeave}>{children}</StyledBody>;
};

export default Body;

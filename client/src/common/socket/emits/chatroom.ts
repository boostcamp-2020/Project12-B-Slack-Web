import { JOIN_CHATROOM } from '@socket/types/chatroom-types';
import socket from '../socketIO';

export const joinChatroom = (chatroomId: number) => {
  socket.emit(JOIN_CHATROOM, { chatroomId });
};

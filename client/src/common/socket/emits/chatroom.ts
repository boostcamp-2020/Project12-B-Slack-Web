import { JOIN_CHATROOM, joinChatroomState } from '@socket/types/chatroom-types';
import socket from '../socketIO';

export const joinChatroom = (chatroomId: joinChatroomState) => {
  socket.emit(JOIN_CHATROOM, { chatroomId });
};

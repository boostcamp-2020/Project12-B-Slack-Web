import { JOIN_CHATROOM, JOIN_DM, LEAVE_CHANNEL } from '@socket/types/chatroom-types';
import socket from '../socketIO';

export const joinChatroom = (chatroomId: number) => {
  socket.emit(JOIN_CHATROOM, { chatroomId });
};

export const joinDM = (userId: number, chatroomId: number) => {
  socket.emit(JOIN_DM, { userId, chatroomId });
};

export const leaveChannel = (chatroomId: number) => {
  socket.emit(LEAVE_CHANNEL, { chatroomId });
};

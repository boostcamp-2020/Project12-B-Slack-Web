import { CREATE_REPLY, createThreadState } from '@socket/types/thread-types';
import socket from '../socketIO';

export const createReply = (reply: createThreadState) => {
  socket.emit(CREATE_REPLY, reply);
};

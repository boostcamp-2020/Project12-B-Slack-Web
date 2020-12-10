import { CREATE_MESSAGE, createMessageState } from '@socket/types/message-types';
import socket from '../socketIO';

export const createMessage = (message: createMessageState) => {
  socket.emit(CREATE_MESSAGE, message);
};

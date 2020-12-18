import {
  CREATE_MESSAGE_REACTION,
  DELETE_MESSAGE_REACTION,
  createMessageReactionState,
  deleteMessageReactionState
} from '@socket/types/reaction-types';
import socket from '../socketIO';

export const createMessageReaction = (reaction: createMessageReactionState) => {
  socket.emit(CREATE_MESSAGE_REACTION, reaction);
};

export const deleteMessageReaction = (reaction: deleteMessageReactionState) => {
  socket.emit(DELETE_MESSAGE_REACTION, reaction);
};

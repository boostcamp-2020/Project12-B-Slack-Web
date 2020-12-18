import {
  CREATE_MESSAGE_REACTION,
  DELETE_MESSAGE_REACTION,
  CREATE_REPLY_REACTION,
  DELETE_REPLY_REACTION,
  createMessageReactionState,
  deleteMessageReactionState,
  createReplyReactionState,
  deleteReplyReactionState
} from '@socket/types/reaction-types';
import socket from '../socketIO';

export const createMessageReaction = (reaction: createMessageReactionState) => {
  socket.emit(CREATE_MESSAGE_REACTION, reaction);
};

export const deleteMessageReaction = (reaction: deleteMessageReactionState) => {
  socket.emit(DELETE_MESSAGE_REACTION, reaction);
};

export const createReplyReaction = (reaction: createReplyReactionState) => {
  socket.emit(CREATE_REPLY_REACTION, reaction);
};

export const deleteReplyReaction = (reaction: deleteReplyReactionState) => {
  socket.emit(DELETE_REPLY_REACTION, reaction);
};

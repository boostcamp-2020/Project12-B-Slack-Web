import { socketReplyReactionState } from '@socket/types/reaction-types';
import { userState } from '@store/types/user-types';

export const LOAD_THREAD = 'LOAD_THREAD';
export const LOAD_THREAD_ASYNC = 'LOAD_THREAD_ASYNC';
export const INSERT_REPLY = 'INSERT_REPLY';
export const LOAD_NEXT_REPLIES = 'LOAD_NEXT_REPLIES';
export const LOAD_NEXT_REPLIES_ASYNC = 'LOAD_NEXT_REPLIES_ASYNC';
export const ADD_REPLY_REACTION = 'ADD_MESSAGE_REACTION';
export const DELETE_REPLY_REACTION = 'DELETE_MESSAGE_REACTION';

export interface threadMessageState {
  messageId: number;
  content: string;
  createdAt: Date;
  updateAt: Date;
  deleteAt: Date;
  user: userState;
  chatroom: Object;
  messageReactions: any;
}

export interface replyState {
  messageId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  replyId: number;
  replyReactions: Array<any>;
  user: userState;
}

export interface repliesState {
  replies: Array<replyState>;
}

export interface threadState {
  message: threadMessageState;
  title: string;
  replies: Array<replyState>;
  selectedThreadId: number | null;
}

export interface asyncLoadThreadState {
  messageId: number;
}

export interface asyncloadNextReplysState {
  messageId: number;
  offsetReply: replyState;
}

export interface AsyncLoadThread {
  type: typeof LOAD_THREAD_ASYNC;
  payload: asyncLoadThreadState;
}

export interface AsyncLoadNextThreadReplys {
  type: typeof LOAD_NEXT_REPLIES_ASYNC;
  payload: asyncloadNextReplysState;
}

interface LoadThreadAction {
  type: typeof LOAD_THREAD;
  payload: threadState;
}

interface InsertReply {
  type: typeof INSERT_REPLY;
  payload: replyState;
}

interface LoadNextReplies {
  type: typeof LOAD_NEXT_REPLIES;
  payload: repliesState;
}

interface AddReplyReaction {
  type: typeof ADD_REPLY_REACTION;
  payload: socketReplyReactionState;
}

interface DeleteReplyReaction {
  type: typeof DELETE_REPLY_REACTION;
  payload: socketReplyReactionState;
}

export type ThreadTypes = LoadThreadAction | InsertReply | LoadNextReplies | AddReplyReaction | DeleteReplyReaction;

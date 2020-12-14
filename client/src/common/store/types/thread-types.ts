import { userState } from '@store/types/user-types';

export const LOAD_THREAD = 'LOAD_THREAD';
export const LOAD_THREAD_ASYNC = 'LOAD_THREAD_ASYNC';
export const INSERT_REPLY = 'INSERT_REPLY';
export const LOAD_NEXT_REPLIES = 'LOAD_NEXT_REPLIES';
export const LOAD_NEXT_REPLIES_ASYNC = 'LOAD_NEXT_REPLIES_ASYNC';

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
  messageId?: number;
  replyId: number;
  content: string;
  createdAt: Date;
  updateAt: Date;
  user: userState;
  replyReactions: Array<object>;
}

export interface repliesState {
  replies: Array<replyState>;
}

export interface threadState {
  message: threadMessageState;
  replies: Array<replyState>;
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

export type ThreadTypes = LoadThreadAction | InsertReply | LoadNextReplies;

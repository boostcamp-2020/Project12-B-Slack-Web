import { socketReplyReactionState } from '@socket/types/reaction-types';
import { UserState } from '@store/types/user-types';
import { ReactionsState, ReplyReactionsState } from '@store/types/reactions-type';

export const LOAD_THREAD = 'LOAD_THREAD';
export const LOAD_THREAD_ASYNC = 'LOAD_THREAD_ASYNC';
export const INSERT_REPLY = 'INSERT_REPLY';
export const LOAD_NEXT_REPLIES = 'LOAD_NEXT_REPLIES';
export const LOAD_NEXT_REPLIES_ASYNC = 'LOAD_NEXT_REPLIES_ASYNC';
export const ADD_REPLY_REACTION = 'ADD_MESSAGE_REACTION';
export const DELETE_REPLY_REACTION = 'DELETE_MESSAGE_REACTION';

export interface ThreadMessageState {
  messageId: number;
  content: string;
  createdAt: Date;
  updateAt: Date;
  deleteAt: Date;
  user: UserState;
  chatroom: Object;
  messageReactions: Array<ReactionsState>;
}

export interface ReplyState {
  messageId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  replyId: number;
  replyReactions: Array<ReplyReactionsState>;
  user: UserState;
}

export interface RepliesState {
  replies: Array<ReplyState>;
}

export interface threadState {
  message: ThreadMessageState;
  title: string;
  replies: Array<ReplyState>;
  selectedThreadId: number | null;
}

export interface AsyncLoadThreadState {
  messageId: number;
}

export interface AsyncloadNextReplysState {
  messageId: number;
  offsetReply: ReplyState;
}

export interface AsyncLoadThread {
  type: typeof LOAD_THREAD_ASYNC;
  payload: AsyncLoadThreadState;
}

export interface AsyncLoadNextThreadReplys {
  type: typeof LOAD_NEXT_REPLIES_ASYNC;
  payload: AsyncloadNextReplysState;
}

interface LoadThreadAction {
  type: typeof LOAD_THREAD;
  payload: threadState;
}

interface InsertReplyAction {
  type: typeof INSERT_REPLY;
  payload: ReplyState;
}

interface LoadNextRepliesAction {
  type: typeof LOAD_NEXT_REPLIES;
  payload: RepliesState;
}

interface AddReplyReactionAction {
  type: typeof ADD_REPLY_REACTION;
  payload: socketReplyReactionState;
}

interface DeleteReplyReactionAction {
  type: typeof DELETE_REPLY_REACTION;
  payload: socketReplyReactionState;
}

export type ThreadTypes = LoadThreadAction | InsertReplyAction | LoadNextRepliesAction | AddReplyReactionAction | DeleteReplyReactionAction;

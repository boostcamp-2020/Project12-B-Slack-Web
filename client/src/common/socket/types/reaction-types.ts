export const CREATE_MESSAGE_REACTION = 'create reaction';
export const DELETE_MESSAGE_REACTION = 'delete reaction';
export const CREATE_REPLY_REACTION = 'create reply reaction';
export const DELETE_REPLY_REACTION = 'delete reply reaction';

interface userInfo {
  displayName: string;
  userId: number;
}

export interface createMessageReactionState {
  messageId: number;
  title: string;
  emoji: string;
}

export interface deleteMessageReactionState {
  messageId: number;
  reactionId: number;
}

export interface createReplyReactionState {
  replyId: number;
  title: string;
  emoji: string;
}

export interface deleteReplyReactionState {
  replyId: number;
  reactionId: number;
}

export interface socketMessageReactionState {
  authors: Array<userInfo>;
  chatroomId: number;
  emoji: string;
  messageId: number;
  reactionId: number;
  title: string;
}

export interface socketReplyReactionState {
  reactionId: number;
  title: string;
  emoji: string;
  replyId: number;
  authors: Array<userInfo>;
  messageId: number;
}

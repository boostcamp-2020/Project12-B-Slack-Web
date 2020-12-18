export const CREATE_MESSAGE_REACTION = 'create reaction';
export const DELETE_MESSAGE_REACTION = 'delete reaction';

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

export interface socketMessageReactionState {
  authors: Array<userInfo>;
  chatroomId: number;
  emoji: string;
  messageId: number;
  reactionId: number;
  title: string;
}

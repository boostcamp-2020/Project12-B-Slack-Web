import { userState } from './user-types';
import { reactionsState } from './reactions-type';
import { chatroomThreadState } from './chatroom-types';

export interface messageState {
  messageId: number;
  createdAt: Date;
  updatedAt: Date;
  user: userState;
  messageReactions: Array<reactionsState>;
  thread: chatroomThreadState;
}

export interface messagesState {
  messages: Array<messageState>;
}

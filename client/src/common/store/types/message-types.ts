import { userState } from './user-types';
import { messageReactionsState } from './message-reactions-type';
import { chatroomThreadState } from './chatroom-types';

export interface messageState {
  messageId: number;
  createAt: Date;
  updateAt: Date;
  user: userState;
  messageReactions: Array<messageReactionsState>;
  thread: chatroomThreadState;
}

export interface messagesState {
  messages: Array<messageState>;
}

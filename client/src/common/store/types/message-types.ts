import { UserState } from './user-types';
import { ReactionsState } from './reactions-type';
import { ChatroomThreadState } from './chatroom-types';

export interface messageState {
  messageId: number;
  createdAt: Date;
  updatedAt: Date;
  user: UserState;
  messageReactions: Array<ReactionsState>;
  thread: ChatroomThreadState;
}

export interface messagesState {
  messages: Array<messageState>;
}

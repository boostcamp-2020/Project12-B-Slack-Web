import { UserState } from './user-types';
import { ReactionsState } from './reactions-type';
import { ChatroomThreadState } from './chatroom-types';

export interface MessageState {
  messageId: number;
  createdAt: Date;
  updatedAt: Date;
  user: UserState;
  messageReactions: Array<ReactionsState>;
  thread: ChatroomThreadState;
}

export interface MessagesState {
  messages: Array<MessageState>;
}

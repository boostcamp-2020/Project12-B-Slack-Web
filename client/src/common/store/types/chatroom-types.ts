export const LOAD = 'LOAD';
export const LOAD_ASYNC = 'LOAD_ASYNC';
export const INIT_SIDEBAR = 'INIT_SIDEBAR';
export const INIT_SIDEBAR_ASYNC = 'INIT_SIDEBAR_ASYNC';
export const PICK_CHANNEL = 'PICK_CHANNEL';
export const PICK_CHANNEL_ASYNC = 'PICK_CHANNEL_ASYNC';
export const INSERT_MESSAGE = 'INSERT_MESSAGE';
export const ADD_CHANNEL = 'ADD_CHANNEL';
export const ADD_CHANNEL_ASYNC = 'ADD_CHANNEL_ASYNC';
export const RESET_SELECTED_CHANNEL = 'RESET_SELECTED_CHANNEL';
export const LOAD_NEXT_MESSAGES = 'LOAD_NEXT_MESSAGES';
export const LOAD_NEXT_MESSAGES_ASYNC = 'LOAD_NEXT_MESSAGES_ASYNC';

export interface selectedChatroomState {
  chatType: string;
  description?: string;
  isPrivate: boolean;
  title: string;
  topic?: string;
  userCount: number;
  users: Array<object>;
}

export interface chatroomState {
  selectedChatroom: selectedChatroomState;
  messages: Array<object>;
  starred: Array<object>;
  otherSections: Array<object>;
  channels: Array<object>;
  directMessages: Array<object>;
  selectedChatroomId: number | null;
}

export interface sidebarState {
  starred: Array<object>;
  otherSections: Array<object>;
  channels: Array<object>;
  directMessages: Array<object>;
  selectedChatroomId: number | null;
}

export interface channelState {
  chatroom: selectedChatroomState;
  messages: Array<object>;
  selectedChatroomId: number;
}

export interface addChannelState {
  chatroomId: number;
  chatType: string;
  isPrivate: boolean;
  title: string;
}

export interface messageState {
  message: any;
  chatroomId: number;
}

export interface messagesState {
  messages: Array<any>;
}

interface LoadChatroomAction {
  type: typeof LOAD;
  payload: chatroomState;
}

interface InitSidebarAction {
  type: typeof INIT_SIDEBAR;
  payload: sidebarState;
}

interface PickChannelAction {
  type: typeof PICK_CHANNEL;
  payload: channelState;
}

interface InsertMessageAction {
  type: typeof INSERT_MESSAGE;
  payload: messageState;
}

interface AddChannelAction {
  type: typeof ADD_CHANNEL;
  payload: addChannelState;
}

interface ResetSelectedChannel {
  type: typeof RESET_SELECTED_CHANNEL;
}

interface LoadNextAction {
  type: typeof LOAD_NEXT_MESSAGES;
  payload: messagesState;
}

export type ChatroomTypes =
  | LoadChatroomAction
  | InitSidebarAction
  | PickChannelAction
  | InsertMessageAction
  | AddChannelAction
  | ResetSelectedChannel
  | LoadNextAction;

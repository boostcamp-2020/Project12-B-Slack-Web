import { socketMessageReactionState } from '@socket/types/reaction-types';
import { messageState, messagesState } from './message-types';

export const LOAD = 'LOAD';
export const LOAD_ASYNC = 'LOAD_ASYNC';
export const INIT_SIDEBAR = 'INIT_SIDEBAR';
export const INIT_SIDEBAR_ASYNC = 'INIT_SIDEBAR_ASYNC';
export const PICK_CHANNEL = 'PICK_CHANNEL';
export const PICK_CHANNEL_ASYNC = 'PICK_CHANNEL_ASYNC';
export const INSERT_MESSAGE = 'INSERT_MESSAGE';
export const ADD_CHANNEL = 'ADD_CHANNEL';
export const ADD_CHANNEL_ASYNC = 'ADD_CHANNEL_ASYNC';
export const ADD_DM = 'ADD_DM';
export const ADD_DM_ASYNC = 'ADD_DM_ASYNC';
export const RESET_SELECTED_CHANNEL = 'RESET_SELECTED_CHANNEL';
export const LOAD_NEXT_MESSAGES = 'LOAD_NEXT_MESSAGES';
export const LOAD_NEXT_MESSAGES_ASYNC = 'LOAD_NEXT_MESSAGES_ASYNC';
export const UPDATE_THREAD = 'UPDATE_THREAD';
export const ADD_MESSAGE_REACTION = 'ADD_MESSAGE_REACTION';
export const DELETE_MESSAGE_REACTION = 'DELETE_MESSAGE_REACTION';

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
  messages: Array<messageState>;
  selectedChatroom: selectedChatroomState;
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

export interface DMState {
  chatProfileImg: string;
  chatType: string;
  chatroomId: number;
  title: string;
}

export interface chatroomThreadState {
  replyCount: number;
  lastReplyAt: Date | null;
  profileUris: Array<string>;
  files: Array<string>;
}

export interface addChannelState {
  chatroomId: number;
  chatType: string;
  isPrivate: boolean;
  title: string;
}

export interface addDMState {
  chatroomId: number;
  chatProfileImg: string;
  chatType: string;
  title: string;
  invitedUserId: number;
}

export interface insertMessageState extends messageState {
  chatroomId: number;
}

export interface updateThreadState {
  profileUri: string;
  messageId: number;
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
  payload: insertMessageState;
}

interface AddChannelAction {
  type: typeof ADD_CHANNEL;
  payload: addChannelState;
}

interface AddDMAction {
  type: typeof ADD_DM;
  payload: addDMState;
}

interface ResetSelectedChannel {
  type: typeof RESET_SELECTED_CHANNEL;
}

interface LoadNextAction {
  type: typeof LOAD_NEXT_MESSAGES;
  payload: messagesState;
}

interface UpdateThread {
  type: typeof UPDATE_THREAD;
  payload: updateThreadState;
}

interface AddMessageReaction {
  type: typeof ADD_MESSAGE_REACTION;
  payload: socketMessageReactionState;
}

interface DeleteMessageReaction {
  type: typeof DELETE_MESSAGE_REACTION;
  payload: socketMessageReactionState;
}

export type ChatroomTypes =
  | LoadChatroomAction
  | InitSidebarAction
  | PickChannelAction
  | InsertMessageAction
  | AddChannelAction
  | AddDMAction
  | ResetSelectedChannel
  | LoadNextAction
  | UpdateThread
  | AddMessageReaction
  | DeleteMessageReaction;

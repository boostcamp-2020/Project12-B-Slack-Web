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
export const JOIN_DM = 'JOIN_DM';
export const JOIN_DM_ASYNC = 'JOIN_DM_ASYNC';
export const LEAVE_CHATROOM = 'LEAVE_CHATROOM';
export const LEAVE_CHATROOM_ASYNC = 'LEAVE_CHATROOM_ASYNC';
export const RESET_SELECTED_CHANNEL = 'RESET_SELECTED_CHANNEL';
export const LOAD_NEXT_MESSAGES = 'LOAD_NEXT_MESSAGES';
export const LOAD_NEXT_MESSAGES_ASYNC = 'LOAD_NEXT_MESSAGES_ASYNC';
export const UPDATE_THREAD = 'UPDATE_THREAD';
export const ADD_MESSAGE_REACTION = 'ADD_MESSAGE_REACTION';
export const DELETE_MESSAGE_REACTION = 'DELETE_MESSAGE_REACTION';
export const UPDATE_CHATROOM = `UPDATE_CHATROOM`;

interface user {
  userId: number;
  profileUri: string;
  displayName: string;
}

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

export interface joinDMState {
  chatroomId: number;
}

export interface leaveChatroomState {
  chatType: string;
  chatroomId: number;
  description: string;
  isPrivate: boolean;
  leaveUserId: number;
  title: string;
  topic: string;
  userCount: number;
  users: Array<user>;
  userId: number;
}

export interface updateChatroomState {
  chatroomId: number;
  userCount: number;
  users: Array<user>;
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

interface JoinDMAction {
  type: typeof JOIN_DM;
  payload: joinDMState;
}

interface LeaveChatroomAction {
  type: typeof LEAVE_CHATROOM;
  payload: leaveChatroomState;
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

interface UpdateChatroomAction {
  type: typeof UPDATE_CHATROOM;
  payload: updateChatroomState;
}

export type ChatroomTypes =
  | LoadChatroomAction
  | InitSidebarAction
  | PickChannelAction
  | InsertMessageAction
  | AddChannelAction
  | AddDMAction
  | JoinDMAction
  | LeaveChatroomAction
  | ResetSelectedChannel
  | LoadNextAction
  | UpdateThread
  | AddMessageReaction
  | DeleteMessageReaction
  | UpdateChatroomAction;

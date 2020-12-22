import { socketMessageReactionState } from '@socket/types/reaction-types';
import { UserState } from '@store/types/user-types';
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
export const UPDATE_CHATROOM = 'UPDATE_CHATROOM';

export interface SelectedChatroomState {
  chatType: string;
  description?: string;
  isPrivate: boolean;
  title: string;
  topic?: string;
  userCount: number;
  users: Array<object>;
}

export interface ChatroomState {
  messages: Array<messageState>;
  selectedChatroom: SelectedChatroomState;
  starred: Array<object>;
  otherSections: Array<object>;
  channels: Array<object>;
  directMessages: Array<object>;
  selectedChatroomId: number | null;
}

export interface SidebarState {
  starred: Array<object>;
  otherSections: Array<object>;
  channels: Array<object>;
  directMessages: Array<object>;
  selectedChatroomId: number | null;
}

export interface ChannelState {
  chatroom: SelectedChatroomState;
  messages: Array<object>;
  selectedChatroomId: number;
}

export interface DMState {
  chatProfileImg: string;
  chatType: string;
  chatroomId: number;
  title: string;
}

export interface ChatroomThreadState {
  replyCount: number;
  lastReplyAt: Date | null;
  profileUris: Array<string>;
  files: Array<string>;
}

export interface AddChannelState {
  chatroomId: number;
  chatType: string;
  isPrivate: boolean;
  title: string;
}

export interface AddDMState {
  chatroomId: number;
  chatProfileImg: string;
  chatType: string;
  title: string;
  invitedUserId: number;
}

export interface JoinDMState {
  chatroomId: number;
}

export interface LeaveChatroomState {
  chatType: string;
  chatroomId: number;
  description: string;
  isPrivate: boolean;
  leaveUserId: number;
  title: string;
  topic: string;
  userCount: number;
  users: Array<UserState>;
  userId: number;
}

export interface UpdateChatroomState {
  chatroomId: number;
  userCount: number;
  users: Array<UserState>;
}

export interface InsertMessageState extends messageState {
  chatroomId: number;
}

export interface UpdateThreadState {
  profileUri: string;
  messageId: number;
}

export interface LoadState {
  selectedChatroomId: number;
}

export interface AsyncAddChannelState {
  title: string;
  description: string;
  isPrivate: boolean;
}

export interface AsyncAddDMState {
  invitedUserId: number;
}

export interface AsyncJoinDMState {
  chatroomId: number;
}

export interface AsyncLoadNextMessagesState {
  chatroomId: number;
  offsetMessage: messageState;
}

export interface AsyncLoad {
  type: typeof LOAD_ASYNC;
  payload: LoadState;
}

export interface AsyncPickChannel {
  type: typeof PICK_CHANNEL_ASYNC;
  payload: LoadState;
}

export interface AsyncAddChannel {
  type: typeof ADD_CHANNEL_ASYNC;
  payload: AsyncAddChannelState;
}

export interface AsyncAddDM {
  type: typeof ADD_DM_ASYNC;
  payload: AsyncAddDMState;
}

export interface AsyncJoinDM {
  type: typeof JOIN_DM_ASYNC;
  payload: AsyncJoinDMState;
}

export interface AsyncLoadNextMessages {
  type: typeof LOAD_NEXT_MESSAGES_ASYNC;
  payload: AsyncLoadNextMessagesState;
}

export interface AsyncLeaveChatroom {
  type: typeof LEAVE_CHATROOM_ASYNC;
  payload: SelectedChatroomState;
}

interface LoadChatroomAction {
  type: typeof LOAD;
  payload: ChatroomState;
}

interface InitSidebarAction {
  type: typeof INIT_SIDEBAR;
  payload: SidebarState;
}

interface PickChannelAction {
  type: typeof PICK_CHANNEL;
  payload: ChannelState;
}

interface InsertMessageAction {
  type: typeof INSERT_MESSAGE;
  payload: InsertMessageState;
}

interface AddChannelAction {
  type: typeof ADD_CHANNEL;
  payload: AddChannelState;
}

interface AddDMAction {
  type: typeof ADD_DM;
  payload: AddDMState;
}

interface JoinDMAction {
  type: typeof JOIN_DM;
  payload: JoinDMState;
}

interface LeaveChatroomAction {
  type: typeof LEAVE_CHATROOM;
  payload: LeaveChatroomState;
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
  payload: UpdateThreadState;
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
  payload: UpdateChatroomState;
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

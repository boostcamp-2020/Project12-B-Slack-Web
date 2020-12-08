export const LOAD = 'LOAD';
export const LOAD_ASYNC = 'LOAD_ASYNC';
export const INIT_SIDEBAR = 'INIT_SIDEBAR';
export const INIT_SIDEBAR_ASYNC = 'INIT_SIDEBAR_ASYNC';
export const PICK_CHANNEL = 'PICK_CHANNEL';
export const PICK_CHANNEL_ASYNC = 'PICK_CHANNEL_ASYNC';

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
  selectedChatroomId: number;
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

export type ChatroomTypes = LoadChatroomAction | InitSidebarAction | PickChannelAction;

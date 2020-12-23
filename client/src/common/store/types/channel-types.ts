export const INIT_CHANNELS = 'INIT_CHANNELS';
export const INIT_CHANNELS_ASYNC = 'INIT_CHANNELS_ASYNC';
export const LOAD_NEXT_CHANNELS = 'LOAD_NEXT_CHANNELS';
export const LOAD_NEXT_CHANNELS_ASYNC = 'LOAD_NEXT_CHANNELS_ASYNC';
export const JOIN_CHANNEL = 'JOIN_CHANNEL';
export const JOIN_CHANNEL_ASYNC = 'JOIN_CHANNEL_ASYNC';
export const LEAVE_CHANNEL = 'LEAVE_CHANNEL';

export interface ChannelState {
  chatroomId: number;
  title: string;
  description?: string;
  isPrivate: boolean;
  members: number;
  isJoined: boolean;
}

export interface ChannelsState {
  channelCount: number;
  channels: Array<ChannelState>;
}

export interface JoinChannelState {
  chatroomId: number;
}

export interface LeaveChannelState {
  chatroomId: number;
}

export interface LoadNextChannelState {
  title: string;
}

export interface AsyncLoadNextChannels {
  type: typeof LOAD_NEXT_CHANNELS_ASYNC;
  payload: LoadNextChannelState;
}

export interface AsyncJoinChannel {
  type: typeof JOIN_CHANNEL_ASYNC;
  payload: JoinChannelState;
}

interface InitChannelsAction {
  type: typeof INIT_CHANNELS;
  payload: ChannelsState;
}

interface LoadNextChannelsAction {
  type: typeof LOAD_NEXT_CHANNELS;
  payload: ChannelsState;
}

interface JoinChannelAction {
  type: typeof JOIN_CHANNEL;
  payload: JoinChannelState;
}

interface LeaveChannelAction {
  type: typeof LEAVE_CHANNEL;
  payload: LeaveChannelState;
}

export type ChannelTypes = InitChannelsAction | LoadNextChannelsAction | JoinChannelAction | LeaveChannelAction;

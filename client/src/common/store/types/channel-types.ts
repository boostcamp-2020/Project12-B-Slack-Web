export const INIT_CHANNELS = 'INIT_CHANNELS';
export const INIT_CHANNELS_ASYNC = 'INIT_CHANNELS_ASYNC';
export const LOAD_NEXT_CHANNELS = 'LOAD_NEXT_CHANNELS';
export const LOAD_NEXT_CHANNELS_ASYNC = 'LOAD_NEXT_CHANNELS_ASYNC';
export const JOIN_CHANNEL = 'JOIN_CHANNEL';
export const JOIN_CHANNEL_ASYNC = 'JOIN_CHANNEL_ASYNC';
export const LEAVE_CHANNEL = 'LEAVE_CHANNEL';

export interface channelState {
  chatroomId: number;
  title: string;
  description?: string;
  isPrivate: boolean;
  members: number;
  isJoined: boolean;
}

export interface channelsState {
  channelCount: number;
  channels: Array<channelState>;
}

export interface joinChannelState {
  chatroomId: number;
}

export interface leaveChannelState {
  chatroomId: number;
}

interface InitChannelsAction {
  type: typeof INIT_CHANNELS;
  payload: channelsState;
}

interface LoadNextChannels {
  type: typeof LOAD_NEXT_CHANNELS;
  payload: channelsState;
}

interface JoinChannel {
  type: typeof JOIN_CHANNEL;
  payload: joinChannelState;
}

interface LeaveChannel {
  type: typeof LEAVE_CHANNEL;
  payload: leaveChannelState;
}

export type ChannelTypes = InitChannelsAction | LoadNextChannels | JoinChannel | LeaveChannel;

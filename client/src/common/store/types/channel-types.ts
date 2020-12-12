export const INIT_CHANNELS = 'INIT_CHANNELS';
export const INIT_CHANNELS_ASYNC = 'INIT_CHANNELS_ASYNC';
export const LOAD_NEXT_CHANNELS = 'LOAD_NEXT_CHANNELS';
export const LOAD_NEXT_CHANNELS_ASYNC = 'LOAD_NEXT_CHANNELS_ASYNC';

export interface channelState {
  channelId: number;
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

interface InitChannelsAction {
  type: typeof INIT_CHANNELS;
  payload: channelsState;
}

interface LoadNextChannels {
  type: typeof LOAD_NEXT_CHANNELS;
  payload: channelsState;
}

export type ChannelTypes = InitChannelsAction | LoadNextChannels;

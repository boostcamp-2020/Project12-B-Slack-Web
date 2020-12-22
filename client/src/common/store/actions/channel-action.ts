import {
  INIT_CHANNELS_ASYNC,
  LOAD_NEXT_CHANNELS_ASYNC,
  JOIN_CHANNEL_ASYNC,
  LEAVE_CHANNEL,
  loadNextChannelState,
  joinChannelState,
  leaveChannelState
} from '../types/channel-types';

export const initChannels = () => ({ type: INIT_CHANNELS_ASYNC });
export const loadNextChannels = (payload: loadNextChannelState) => ({ type: LOAD_NEXT_CHANNELS_ASYNC, payload });
export const joinChannel = (payload: joinChannelState) => ({ type: JOIN_CHANNEL_ASYNC, payload });
export const leaveChannel = (payload: leaveChannelState) => ({ type: LEAVE_CHANNEL, payload });

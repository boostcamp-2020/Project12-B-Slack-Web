import {
  INIT_CHANNELS_ASYNC,
  LOAD_NEXT_CHANNELS_ASYNC,
  JOIN_CHANNEL_ASYNC,
  LEAVE_CHANNEL,
  LoadNextChannelState,
  JoinChannelState,
  LeaveChannelState
} from '../types/channel-types';

export const initChannels = () => ({ type: INIT_CHANNELS_ASYNC });
export const loadNextChannels = (payload: LoadNextChannelState) => ({ type: LOAD_NEXT_CHANNELS_ASYNC, payload });
export const joinChannel = (payload: JoinChannelState) => ({ type: JOIN_CHANNEL_ASYNC, payload });
export const leaveChannel = (payload: LeaveChannelState) => ({ type: LEAVE_CHANNEL, payload });

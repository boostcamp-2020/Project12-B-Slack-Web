import { INIT_CHANNELS_ASYNC, LOAD_NEXT_CHANNELS_ASYNC, JOIN_CHANNEL_ASYNC } from '../types/channel-types';

export const initChannels = () => ({ type: INIT_CHANNELS_ASYNC });
export const loadNextChannels = (payload: any) => ({ type: LOAD_NEXT_CHANNELS_ASYNC, payload });
export const joinChannel = (payload: any) => ({ type: JOIN_CHANNEL_ASYNC, payload });

import { channelsState, ChannelTypes, INIT_CHANNELS, LOAD_NEXT_CHANNELS } from '../types/channel-types';

const initialState: channelsState = {
  channelCount: 0,
  channels: []
};

export default function channelReducer(state = initialState, action: ChannelTypes) {
  switch (action.type) {
    case INIT_CHANNELS:
      return {
        channelCount: action.payload.channelCount,
        channels: action.payload.channels
      };
    case LOAD_NEXT_CHANNELS:
      return {
        ...state,
        channels: [...state.channels, ...action.payload.channels]
      };
    default:
      return state;
  }
}

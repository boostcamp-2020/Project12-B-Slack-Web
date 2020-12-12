import { channelState, channelsState, ChannelTypes, INIT_CHANNELS, LOAD_NEXT_CHANNELS, JOIN_CHANNEL } from '../types/channel-types';

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
    case JOIN_CHANNEL:
      const { chatroomId } = action.payload;
      const channels = state.channels.map((channel: channelState) => {
        if (channel.chatroomId === chatroomId) return { ...channel, isJoined: true };
        return channel;
      });
      return { ...state, channels };
    default:
      return state;
  }
}

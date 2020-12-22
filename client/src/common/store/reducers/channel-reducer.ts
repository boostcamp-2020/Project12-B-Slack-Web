import { ChannelState, ChannelsState, ChannelTypes, INIT_CHANNELS, LOAD_NEXT_CHANNELS, JOIN_CHANNEL, LEAVE_CHANNEL } from '../types/channel-types';

const initialState: ChannelsState = {
  channelCount: 0,
  channels: []
};

export default function channelReducer(state = initialState, action: ChannelTypes) {
  switch (action.type) {
    case INIT_CHANNELS: {
      return {
        channelCount: action.payload.channelCount,
        channels: action.payload.channels
      };
    }
    case LOAD_NEXT_CHANNELS: {
      return {
        ...state,
        channels: [...state.channels, ...action.payload.channels]
      };
    }
    case JOIN_CHANNEL: {
      const { chatroomId } = action.payload;
      const channels = state.channels.map((channel: ChannelState) => {
        if (channel.chatroomId === chatroomId) return { ...channel, isJoined: true, members: channel.members + 1 };
        return channel;
      });
      return { ...state, channels };
    }
    case LEAVE_CHANNEL: {
      const { chatroomId } = action.payload;
      const channels = state.channels.map((channel: ChannelState) => {
        if (channel.chatroomId === chatroomId) return { ...channel, isJoined: false, members: channel.members - 1 };
        return channel;
      });

      return { ...state, channels };
    }
    default: {
      return state;
    }
  }
}

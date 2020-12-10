/* eslint-disable no-case-declarations */
import { uriParser } from '@utils/index';
import {
  chatroomState,
  LOAD,
  ChatroomTypes,
  PICK_CHANNEL,
  INIT_SIDEBAR,
  INSERT_MESSAGE,
  ADD_CHANNEL,
  LOAD_NEXT_MESSAGES
} from '../types/chatroom-types';

const initialState: chatroomState = {
  selectedChatroom: {
    chatType: '',
    description: '',
    isPrivate: false,
    title: '',
    topic: '',
    userCount: 0,
    users: []
  },
  starred: [],
  otherSections: [],
  channels: [],
  directMessages: [],
  selectedChatroomId: uriParser.getChatroomId(),
  messages: []
};

export default function chatroomReducer(state = initialState, action: ChatroomTypes) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        selectedChatroom: action.payload.selectedChatroom,
        messages: action.payload.messages
      };
    case INIT_SIDEBAR:
      return {
        ...state,
        starred: action.payload.starred,
        otherSections: action.payload.otherSections,
        channels: action.payload.channels,
        directMessages: action.payload.directMessages
      };
    case PICK_CHANNEL:
      return {
        ...state,
        selectedChatroom: action.payload.chatroom,
        messages: action.payload.messages,
        selectedChatroomId: action.payload.selectedChatroomId
      };
    case INSERT_MESSAGE:
      const newMessages = state.messages;
      if (action.payload.chatroomId === state.selectedChatroomId) newMessages.push(action.payload);
      return {
        ...state,
        messages: newMessages
      };
    case ADD_CHANNEL:
      const newChannels = state.channels;
      newChannels.push(action.payload);
      return {
        ...state,
        channels: newChannels
      };
    case LOAD_NEXT_MESSAGES:
      const nextMessages = action.payload.messages;
      nextMessages.push(...state.messages);
      return {
        ...state,
        messages: nextMessages
      };
    default:
      return state;
  }
}

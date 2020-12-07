import { uriParser } from '@utils/index';
import { chatroomState, LOAD, ChatroomTypes, PICK_CHANNEL, INIT_SIDEBAR } from '../types/chatroom-types';

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
  selectedChatroomId: uriParser.getChatroomId()
};

export default function chatroomReducer(state = initialState, action: ChatroomTypes) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        selectedChatroom: action.payload
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
        selectedChatroomId: action.payload.selectedChatroomId
      };
    default:
      return state;
  }
}

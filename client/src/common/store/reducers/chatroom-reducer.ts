/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { uriParser } from '@utils/index';
import { joinChatroom, joinDM } from '@socket/emits/chatroom';
import { messageState } from '@store/types/message-types';
import {
  chatroomState,
  LOAD,
  ChatroomTypes,
  PICK_CHANNEL,
  INIT_SIDEBAR,
  INSERT_MESSAGE,
  ADD_CHANNEL,
  ADD_DM,
  JOIN_DM,
  LEAVE_CHATROOM,
  RESET_SELECTED_CHANNEL,
  LOAD_NEXT_MESSAGES,
  UPDATE_THREAD
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

const chatroomReducer = (state = initialState, action: ChatroomTypes) => {
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
      joinChatroom(action.payload.chatroomId);
      return {
        ...state,
        channels: newChannels
      };
    case ADD_DM:
      const newDMs = state.directMessages;
      newDMs.push(action.payload);
      joinChatroom(action.payload.chatroomId);
      joinDM(action.payload.invitedUserId, action.payload.chatroomId);
      return {
        ...state,
        directMessages: newDMs
      };
    case JOIN_DM:
      const DMs = state.directMessages;
      DMs.push(action.payload);
      joinChatroom(action.payload.chatroomId);
      return {
        ...state,
        directMessages: DMs
      };
    case LEAVE_CHATROOM:
      const { chatroomId } = action.payload;
      const channels = state.channels.filter((channel: any) => channel.chatroomId !== chatroomId);
      return {
        ...state,
        channels
      };
    case RESET_SELECTED_CHANNEL:
      const selectedChatroom = {
        chatType: '',
        description: '',
        isPrivate: false,
        title: '',
        topic: '',
        userCount: 0,
        users: []
      };
      return {
        ...state,
        selectedChatroom,
        selectedChatroomId: null,
        messages: []
      };
    case LOAD_NEXT_MESSAGES:
      const nextMessages = action.payload.messages;
      nextMessages.push(...state.messages);
      return {
        ...state,
        messages: nextMessages
      };
    case UPDATE_THREAD:
      const updateMessages = state.messages;
      const { messageId, profileUri } = action.payload;
      updateMessages.forEach((message: messageState) => {
        if (message.messageId === messageId) {
          message.thread.profileUris.push(profileUri);
          message.thread.replyCount += 1;
          message.thread.lastReplyAt = new Date();
        }
      });
      return {
        ...state,
        messages: updateMessages
      };
    default:
      return state;
  }
};

export default chatroomReducer;

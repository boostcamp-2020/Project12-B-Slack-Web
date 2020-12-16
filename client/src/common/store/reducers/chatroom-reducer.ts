/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { uriParser } from '@utils/index';
import { joinChatroom } from '@socket/emits/chatroom';
import { messageState } from '@store/types/message-types';
import { messageReactionsState } from '@store/types/message-reactions-type';
import {
  chatroomState,
  LOAD,
  ChatroomTypes,
  PICK_CHANNEL,
  INIT_SIDEBAR,
  INSERT_MESSAGE,
  ADD_CHANNEL,
  ADD_DM,
  RESET_SELECTED_CHANNEL,
  LOAD_NEXT_MESSAGES,
  UPDATE_THREAD,
  ADD_MESSAGE_REACTION,
  DELETE_MESSAGE_REACTION
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
      return {
        ...state,
        directMessages: newDMs
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
    case ADD_MESSAGE_REACTION:
      const addReactionMessages = state.messages;
      if (state.selectedChatroomId === action.payload.chatroomId) {
        addReactionMessages.forEach((message: messageState) => {
          if (message.messageId === action.payload.messageId) {
            let isExistReaction = false;
            message.messageReactions.forEach((reaction: messageReactionsState) => {
              if (reaction.reactionId === action.payload.reactionId) {
                reaction.reactionCount += 1;
                reaction.reactionDisplayNames = action.payload.authors.reduce((acc: Array<string>, val: any) => {
                  acc.push(val.displayName);
                  return acc;
                }, []);
                isExistReaction = true;
              }
            });
            if (!isExistReaction) {
              message.messageReactions.push({
                reactionCount: 1,
                emoji: action.payload.emoji,
                reactionDisplayNames: [action.payload.authors[0].displayName],
                reactionId: action.payload.reactionId,
                title: action.payload.title
              });
            }
          }
        });
      }
      return { ...state, messages: addReactionMessages };
    case DELETE_MESSAGE_REACTION:
      const deleteReactionMessages = state.messages;
      if (state.selectedChatroomId === action.payload.chatroomId) {
        deleteReactionMessages.forEach((message: messageState) => {
          if (message.messageId === action.payload.messageId) {
            message.messageReactions.forEach((reaction: messageReactionsState) => {
              if (reaction.reactionId === action.payload.reactionId) {
                reaction.reactionCount -= 1;
                reaction.reactionDisplayNames = action.payload.authors.reduce((acc: Array<string>, val: any) => {
                  acc.push(val.displayName);
                  return acc;
                }, []);
              }
            });
          }
        });
      }
      return { ...state, messages: deleteReactionMessages };
    default:
      return state;
  }
};

export default chatroomReducer;

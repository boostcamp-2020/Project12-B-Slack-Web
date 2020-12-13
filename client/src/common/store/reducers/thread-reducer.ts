import { LOAD_THREAD, threadState, INSERT_REPLY, ThreadTypes } from '@store/types/thread-types';

const initialState: threadState = {
  message: {
    messageId: 0,
    content: '',
    createdAt: new Date(),
    updateAt: new Date(),
    deleteAt: new Date(),
    user: {
      userId: 0,
      profileUri: '',
      displayName: ''
    },
    chatroom: {},
    messageReactions: []
  },
  replies: []
};

export default function threadReducer(state = initialState, action: ThreadTypes) {
  switch (action.type) {
    case LOAD_THREAD:
      return {
        ...state,
        message: action.payload.message,
        replies: action.payload.replies
      };
    case INSERT_REPLY:
      const newReplies = state.replies;
      if (action.payload.messageId === state.message.messageId) newReplies.push(action.payload);

      return {
        ...state,
        messages: newReplies
      };
    default:
      return state;
  }
}

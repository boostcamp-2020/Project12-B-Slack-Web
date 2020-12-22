/* eslint-disable no-param-reassign */
import {
  LOAD_THREAD,
  threadState,
  INSERT_REPLY,
  ThreadTypes,
  LOAD_NEXT_REPLIES,
  ADD_REPLY_REACTION,
  DELETE_REPLY_REACTION,
  ReplyState
} from '@store/types/thread-types';
import { uriParser } from '@utils/index';

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
  title: '',
  replies: [],
  selectedThreadId: uriParser.getThreadId()
};

export default function threadReducer(state = initialState, action: ThreadTypes) {
  switch (action.type) {
    case LOAD_THREAD:
      return {
        ...state,
        message: action.payload.message,
        replies: action.payload.replies,
        title: action.payload.title,
        selectedThreadId: uriParser.getThreadId()
      };
    case INSERT_REPLY:
      const newReplies = state.replies;
      if (action.payload.messageId === state.message.messageId) newReplies.push(action.payload);

      return {
        ...state,
        messages: newReplies
      };
    case LOAD_NEXT_REPLIES:
      const nextreplies = action.payload.replies;
      nextreplies.push(...state.replies);

      return {
        ...state,
        replies: nextreplies
      };
    case ADD_REPLY_REACTION: {
      const NewReplies = state.replies;
      const { messageId, reactionId, replyId } = action.payload;
      if (state.selectedThreadId === messageId) {
        NewReplies.forEach((reply: ReplyState) => {
          if (reply.replyId === replyId) {
            let bExistReaction = false;
            reply.replyReactions.forEach((reaction: any) => {
              if (reaction.reactionId === reactionId) {
                reaction.reactionCount += 1;
                reaction.replyDisplayNames = action.payload.authors.reduce((acc: Array<string>, val: any) => {
                  acc.push(val.displayName);
                  return acc;
                }, []);
                bExistReaction = true;
              }
            });
            if (!bExistReaction) {
              reply.replyReactions.push({
                reactionCount: 1,
                emoji: action.payload.emoji,
                replyDisplayNames: [action.payload.authors[0].displayName],
                reactionId: action.payload.reactionId,
                title: action.payload.title
              });
            }
          }
        });
      }

      return { ...state, replies: NewReplies };
    }
    case DELETE_REPLY_REACTION: {
      const NewReplies = state.replies;
      const { messageId, reactionId, replyId } = action.payload;
      if (state.selectedThreadId === messageId) {
        NewReplies.forEach((reply: ReplyState) => {
          if (reply.replyId === replyId) {
            reply.replyReactions.forEach((reaction: any) => {
              if (reaction.reactionId === action.payload.reactionId) {
                reaction.reactionCount -= 1;
                reaction.replyDisplayNames = action.payload.authors.reduce((acc: Array<string>, val: any) => {
                  acc.push(val.displayName);
                  return acc;
                }, []);
              }
            });
          }
        });
      }
      return { ...state, replies: NewReplies };
    }
    default:
      return state;
  }
}

import { socketReplyReactionState } from '@socket/types/reaction-types';
import {
  LOAD_THREAD_ASYNC,
  INSERT_REPLY,
  LOAD_NEXT_REPLIES_ASYNC,
  ADD_REPLY_REACTION,
  DELETE_REPLY_REACTION,
  replyState,
  asyncloadNextReplysState,
  asyncLoadThreadState
} from '@store/types/thread-types';

export const loadThread = (payload: asyncLoadThreadState) => ({ type: LOAD_THREAD_ASYNC, payload });
export const InsertReply = (payload: replyState) => ({ type: INSERT_REPLY, payload });
export const loadNextReplies = (payload: asyncloadNextReplysState) => ({ type: LOAD_NEXT_REPLIES_ASYNC, payload });
export const createReplyReaction = (payload: socketReplyReactionState) => ({ type: ADD_REPLY_REACTION, payload });
export const deleteReplyReaction = (payload: socketReplyReactionState) => ({ type: DELETE_REPLY_REACTION, payload });

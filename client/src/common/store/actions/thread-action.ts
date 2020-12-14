import { LOAD_THREAD_ASYNC, INSERT_REPLY, LOAD_NEXT_REPLIES_ASYNC, replyState } from '@store/types/thread-types';

export const loadThread = (messageId: number) => ({ type: LOAD_THREAD_ASYNC, payload: { messageId } });
export const InsertReply = (payload: replyState) => ({ type: INSERT_REPLY, payload });
export const loadNextReplies = (payload: any) => ({ type: LOAD_NEXT_REPLIES_ASYNC, payload });

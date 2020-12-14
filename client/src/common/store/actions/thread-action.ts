import { LOAD_THREAD_ASYNC, INSERT_REPLY, replyState } from '@store/types/thread-types';

export const loadThread = (messageId: number) => ({ type: LOAD_THREAD_ASYNC, payload: { messageId } });
export const InsertReply = (payload: replyState) => ({ type: INSERT_REPLY, payload });

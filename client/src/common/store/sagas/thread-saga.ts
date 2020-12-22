import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import {
  LOAD_THREAD,
  LOAD_THREAD_ASYNC,
  LOAD_NEXT_REPLIES,
  LOAD_NEXT_REPLIES_ASYNC,
  AsyncLoadThread,
  AsyncLoadNextThreadReplys
} from '@store/types/thread-types';

function* loadThreadSaga(action: AsyncLoadThread) {
  try {
    const { messageId } = action.payload;
    const payload = yield call(API.getThread, messageId);
    const { title } = yield call(API.getChatroom, payload.message.chatroom.chatroomId);
    yield put({ type: LOAD_THREAD, payload: { ...payload, title } });
  } catch (e) {
    console.log(e);
  }
}

function* loadNextReplies(action: AsyncLoadNextThreadReplys) {
  try {
    const { offsetReply, messageId } = action.payload;
    const offsetId = offsetReply.replyId;
    const { replies } = yield call(API.getNextReplies, messageId, offsetId);
    yield put({ type: LOAD_NEXT_REPLIES, payload: { replies } });
  } catch (e) {
    console.log(e);
  }
}

export function* threadSaga() {
  yield takeEvery(LOAD_THREAD_ASYNC, loadThreadSaga);
  yield takeEvery(LOAD_NEXT_REPLIES_ASYNC, loadNextReplies);
}

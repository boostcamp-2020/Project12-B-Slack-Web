import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import { LOAD_THREAD, LOAD_THREAD_ASYNC, LOAD_NEXT_REPLIES, LOAD_NEXT_REPLIES_ASYNC } from '@store/types/thread-types';

function* loadThreadSaga(action: any) {
  try {
    const { messageId } = action.payload;
    const payload = yield call(API.getThread, messageId);
    yield put({ type: LOAD_THREAD, payload });
  } catch (e) {
    console.log(e);
  }
}

function* loadNextReplies(action: any) {
  try {
    const offsetId = action.payload.offsetReply.replyId;
    const { replies } = yield call(API.getNextReplies, action.payload.messageId, offsetId);
    yield put({ type: LOAD_NEXT_REPLIES, payload: { replies } });
  } catch (e) {
    console.log(e);
  }
}

export function* threadSaga() {
  yield takeEvery(LOAD_THREAD_ASYNC, loadThreadSaga);
  yield takeEvery(LOAD_NEXT_REPLIES_ASYNC, loadNextReplies);
}

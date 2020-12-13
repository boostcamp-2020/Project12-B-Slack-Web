import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import { LOAD_THREAD, LOAD_THREAD_ASYNC } from '@store/types/thread-types';

function* loadThreadSaga(action: any) {
  try {
    const { messageId } = action.payload;
    const payload = yield call(API.getThread, messageId);
    yield put({ type: LOAD_THREAD, payload });
  } catch (e) {
    console.log(e);
  }
}

export function* threadSaga() {
  yield takeEvery(LOAD_THREAD_ASYNC, loadThreadSaga);
}

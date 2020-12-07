import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import { LOGIN, LOGIN_ASYNC } from '../types/user-types';

function* userLoginSaga() {
  try {
    const payload = yield call(API.getUserInfo);
    yield put({ type: LOGIN, payload });
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_ASYNC, userLoginSaga);
}

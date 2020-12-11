import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import { INIT_CHANNELS, INIT_CHANNELS_ASYNC } from '../types/channel-types';

function* initChannelsSaga() {
  try {
    const channelCount = 0;
    const channels = yield call(API.getChannels);
    yield put({ type: INIT_CHANNELS, payload: { channelCount, channels } });
  } catch (e) {
    console.log(e);
  }
}

export function* channelSaga() {
  yield takeEvery(INIT_CHANNELS_ASYNC, initChannelsSaga);
}

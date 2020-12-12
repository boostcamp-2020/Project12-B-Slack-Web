import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import { INIT_CHANNELS, INIT_CHANNELS_ASYNC, LOAD_NEXT_CHANNELS, LOAD_NEXT_CHANNELS_ASYNC } from '../types/channel-types';

function* initChannelsSaga() {
  try {
    const { channels, channelCount } = yield call(API.getChannels);
    yield put({ type: INIT_CHANNELS, payload: { channelCount, channels } });
  } catch (e) {
    console.log(e);
  }
}

function* loadNextChannels(action: any) {
  try {
    const { title } = action.payload;
    const nextChannels = yield call(API.getNextChannels, title);
    yield put({ type: LOAD_NEXT_CHANNELS, payload: { channels: nextChannels } });
  } catch (e) {
    console.log(e);
  }
}

export function* channelSaga() {
  yield takeEvery(INIT_CHANNELS_ASYNC, initChannelsSaga);
  yield takeEvery(LOAD_NEXT_CHANNELS_ASYNC, loadNextChannels);
}

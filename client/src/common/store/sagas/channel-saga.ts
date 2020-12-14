import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import {
  INIT_CHANNELS,
  INIT_CHANNELS_ASYNC,
  JOIN_CHANNEL,
  JOIN_CHANNEL_ASYNC,
  LOAD_NEXT_CHANNELS,
  LOAD_NEXT_CHANNELS_ASYNC
} from '../types/channel-types';
import { ADD_CHANNEL, PICK_CHANNEL_ASYNC } from '../types/chatroom-types';

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

function* joinChannel(action: any) {
  try {
    const { chatroomId } = action.payload;
    yield call(API.joinChannel, chatroomId);
    yield put({ type: JOIN_CHANNEL, payload: { chatroomId } });
    const chatroom = yield call(API.getChatroom, chatroomId);
    const { chatType, isPrivate, title } = chatroom;
    const payload = { chatroomId, chatType, isPrivate, title };
    yield put({ type: ADD_CHANNEL, payload });
    yield put({ type: PICK_CHANNEL_ASYNC, payload: { selectedChatroomId: chatroomId } });
  } catch (e) {
    console.log(e);
  }
}

export function* channelSaga() {
  yield takeEvery(INIT_CHANNELS_ASYNC, initChannelsSaga);
  yield takeEvery(LOAD_NEXT_CHANNELS_ASYNC, loadNextChannels);
  yield takeEvery(JOIN_CHANNEL_ASYNC, joinChannel);
}

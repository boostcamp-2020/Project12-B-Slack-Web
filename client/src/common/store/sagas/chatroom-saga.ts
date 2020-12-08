import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import { LOAD, LOAD_ASYNC, INIT_SIDEBAR, INIT_SIDEBAR_ASYNC, PICK_CHANNEL, PICK_CHANNEL_ASYNC } from '../types/chatroom-types';

function* loadSaga(action: any) {
  try {
    const payload = yield call(API.getChatroom, action.payload.selectedChatroomId);
    const messages = yield call(API.getMessages, action.payload.selectedChatroomId);
    yield put({ type: LOAD, payload: { selectedChatroom: payload, messages } });
  } catch (e) {
    console.log(e);
  }
}

function* initSidebarSaga() {
  try {
    const payload = yield call(API.getUserChatroom);
    yield put({ type: INIT_SIDEBAR, payload });
  } catch (e) {
    console.log(e);
  }
}

function* pickChannelSaga(action: any) {
  try {
    const chatroom = yield call(API.getChatroom, action.payload.selectedChatroomId);
    const messages = yield call(API.getMessages, action.payload.selectedChatroomId);
    yield put({
      type: PICK_CHANNEL,
      payload: {
        chatroom,
        messages,
        selectedChatroomId: action.payload.selectedChatroomId
      }
    });
  } catch (e) {
    console.log(e);
  }
}

export function* chatroomSaga() {
  yield takeEvery(LOAD_ASYNC, loadSaga);
  yield takeEvery(INIT_SIDEBAR_ASYNC, initSidebarSaga);
  yield takeEvery(PICK_CHANNEL_ASYNC, pickChannelSaga);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import {
  LOAD,
  LOAD_ASYNC,
  INIT_SIDEBAR,
  INIT_SIDEBAR_ASYNC,
  PICK_CHANNEL,
  PICK_CHANNEL_ASYNC,
  ADD_CHANNEL_ASYNC,
  ADD_CHANNEL,
  LOAD_NEXT_MESSAGES,
  LOAD_NEXT_MESSAGES_ASYNC
} from '../types/chatroom-types';

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

function* addChannel(action: any) {
  try {
    const chatroomId = yield call(API.createChannel, action.payload.title, action.payload.description, action.payload.isPrivate);
    const payload = { chatroomId, chatType: 'Channel', isPrivate: action.payload.isPrivate, title: action.payload.title };
    yield put({ type: ADD_CHANNEL, payload });
    yield put({ type: PICK_CHANNEL_ASYNC, payload: { selectedChatroomId: chatroomId } });
  } catch (e) {
    alert('같은 이름의 채널이 존재합니다.');
  }
}

function* loadNextMessages(action: any) {
  try {
    const offsetId = action.payload.offsetMessage.messageId;
    const nextMessages = yield call(API.getNextMessages, action.payload.chatRoomId, offsetId);
    yield put({ type: LOAD_NEXT_MESSAGES, payload: { messages: nextMessages } });
  } catch (e) {
    console.log(e);
  }
}

export function* chatroomSaga() {
  yield takeEvery(LOAD_ASYNC, loadSaga);
  yield takeEvery(INIT_SIDEBAR_ASYNC, initSidebarSaga);
  yield takeEvery(PICK_CHANNEL_ASYNC, pickChannelSaga);
  yield takeEvery(ADD_CHANNEL_ASYNC, addChannel);
  yield takeEvery(LOAD_NEXT_MESSAGES_ASYNC, loadNextMessages);
}

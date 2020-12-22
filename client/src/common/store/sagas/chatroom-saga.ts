import { call, put, takeEvery } from 'redux-saga/effects';
import API from '@utils/api';
import { ChatroomType } from '@constants/index';
import {
  LOAD,
  LOAD_ASYNC,
  INIT_SIDEBAR,
  INIT_SIDEBAR_ASYNC,
  PICK_CHANNEL,
  PICK_CHANNEL_ASYNC,
  ADD_CHANNEL_ASYNC,
  ADD_CHANNEL,
  ADD_DM_ASYNC,
  ADD_DM,
  JOIN_DM_ASYNC,
  JOIN_DM,
  LOAD_NEXT_MESSAGES,
  LOAD_NEXT_MESSAGES_ASYNC,
  LEAVE_CHATROOM,
  LEAVE_CHATROOM_ASYNC,
  asyncLoad,
  asyncPickChannel,
  asyncAddChannel,
  asyncAddDM,
  asyncJoinDM,
  asyncLoadNextMessages,
  asyncLeaveChatroom
} from '../types/chatroom-types';

function* loadSaga(action: asyncLoad) {
  try {
    const { selectedChatroomId } = action.payload;
    const payload = yield call(API.getChatroom, selectedChatroomId);
    const messages = yield call(API.getMessages, selectedChatroomId);
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

function* pickChannelSaga(action: asyncPickChannel) {
  try {
    const { selectedChatroomId } = action.payload;
    const chatroom = yield call(API.getChatroom, selectedChatroomId);
    const messages = yield call(API.getMessages, selectedChatroomId);
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

function* addChannel(action: asyncAddChannel) {
  try {
    const { title, description, isPrivate } = action.payload;
    const chatroomId = yield call(API.createChannel, title, description, isPrivate);
    const payload = { chatroomId, chatType: ChatroomType.Channel, isPrivate, title };
    yield put({ type: ADD_CHANNEL, payload });
    yield put({ type: PICK_CHANNEL_ASYNC, payload: { selectedChatroomId: chatroomId } });
  } catch (e) {
    alert('같은 이름의 채널이 존재합니다.');
  }
}

function* addDM(action: asyncAddDM) {
  try {
    const { invitedUserId } = action.payload;
    const chatroomId = yield call(API.createDM, invitedUserId);
    const { profileUri, displayName } = yield call(API.getUser, invitedUserId);
    yield put({ type: ADD_DM, payload: { chatroomId, chatProfileImg: profileUri, chatType: ChatroomType.DM, title: displayName, invitedUserId } });
    yield put({ type: PICK_CHANNEL_ASYNC, payload: { selectedChatroomId: chatroomId } });
  } catch (e) {
    console.log(e);
  }
}

function* joinDM(action: asyncJoinDM) {
  try {
    const { chatroomId } = action.payload;
    const DM = yield call(API.getChatroom, chatroomId);
    const { chatProfileImg, chatType, title } = DM;
    yield put({ type: JOIN_DM, payload: { chatroomId, chatProfileImg, chatType, title } });
  } catch (e) {
    console.log(e);
  }
}

function* loadNextMessages(action: asyncLoadNextMessages) {
  try {
    const { offsetMessage, chatroomId } = action.payload;
    const offsetId = offsetMessage.messageId;
    const nextMessages = yield call(API.getNextMessages, chatroomId, offsetId);
    yield put({ type: LOAD_NEXT_MESSAGES, payload: { messages: nextMessages } });
  } catch (e) {
    console.log(e);
  }
}

function* leaveChatroom(action: asyncLeaveChatroom) {
  try {
    const { userId } = yield call(API.getUserInfo);
    const payload = { userId, ...action.payload };
    yield put({ type: LEAVE_CHATROOM, payload });
  } catch (e) {
    console.log(e);
  }
}

export function* chatroomSaga() {
  yield takeEvery(LOAD_ASYNC, loadSaga);
  yield takeEvery(INIT_SIDEBAR_ASYNC, initSidebarSaga);
  yield takeEvery(PICK_CHANNEL_ASYNC, pickChannelSaga);
  yield takeEvery(ADD_CHANNEL_ASYNC, addChannel);
  yield takeEvery(ADD_DM_ASYNC, addDM);
  yield takeEvery(JOIN_DM_ASYNC, joinDM);
  yield takeEvery(LOAD_NEXT_MESSAGES_ASYNC, loadNextMessages);
  yield takeEvery(LEAVE_CHATROOM_ASYNC, leaveChatroom);
}

import { all } from 'redux-saga/effects';
import { chatroomSaga } from './chatroom-saga';
import { userSaga } from './user-saga';
import { channelSaga } from './channel-saga';
import { threadSaga } from './thread-saga';

export function* rootSaga() {
  yield all([chatroomSaga(), userSaga(), channelSaga(), threadSaga()]);
}

import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import chatroomReducer from './chatroom-reducer';
import modalReducer from './modal-reducer';
import channelReducer from './channel-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  chatroom: chatroomReducer,
  modal: modalReducer,
  channel: channelReducer
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import chatroomReducer from './chatroom-reducer';
import modalReducer from './modal-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  chatroom: chatroomReducer,
  modal: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;

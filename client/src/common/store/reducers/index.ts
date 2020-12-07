import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import chatroomReducer from './chatroom-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  chatroom: chatroomReducer
});

export type RootState = ReturnType<typeof rootReducer>;

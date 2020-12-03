import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import sidebarReducer from './sidebar-reducer';
import chatroomReducer from './chatroom-reducer';

const rootReducer = combineReducers({
  userData: userReducer,
  sidebarData: sidebarReducer,
  chatroomData: chatroomReducer
});

export default rootReducer;

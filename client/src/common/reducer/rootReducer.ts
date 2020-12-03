import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import sidebarReducer from './sidebar-reducer';

const rootReducer = combineReducers({
  userReducer,
  sidebarReducer
});

export default rootReducer;

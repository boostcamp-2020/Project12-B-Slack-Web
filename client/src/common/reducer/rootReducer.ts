import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import sidebarReducer from './sidebar-reducer';

const rootReducer = combineReducers({
  userData: userReducer,
  sidebarData: sidebarReducer,
});

export default rootReducer;

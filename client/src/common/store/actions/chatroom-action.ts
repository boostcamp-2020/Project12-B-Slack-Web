import {
  LOAD_ASYNC,
  INIT_SIDEBAR_ASYNC,
  PICK_CHANNEL_ASYNC,
  INSERT_MESSAGE,
  ADD_CHANNEL_ASYNC,
  RESET_SELECTED_CHANNEL
} from '../types/chatroom-types';

export const loadAsync = (payload: any) => ({ type: LOAD_ASYNC, payload });
export const initSidebarAsync = () => ({ type: INIT_SIDEBAR_ASYNC });
export const pickChannel = (payload: any) => ({ type: PICK_CHANNEL_ASYNC, payload });
export const insertMessage = (payload: any) => ({ type: INSERT_MESSAGE, payload });
export const addChannel = (payload: any) => ({ type: ADD_CHANNEL_ASYNC, payload });
export const resetSelectedChannel = () => ({ type: RESET_SELECTED_CHANNEL });

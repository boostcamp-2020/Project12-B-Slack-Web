import { socketMessageReactionState } from '@socket/types/reaction-types';
import {
  LOAD_ASYNC,
  INIT_SIDEBAR_ASYNC,
  PICK_CHANNEL_ASYNC,
  INSERT_MESSAGE,
  ADD_CHANNEL_ASYNC,
  ADD_DM_ASYNC,
  JOIN_DM_ASYNC,
  LEAVE_CHATROOM_ASYNC,
  RESET_SELECTED_CHANNEL,
  LOAD_NEXT_MESSAGES_ASYNC,
  UPDATE_THREAD,
  ADD_MESSAGE_REACTION,
  DELETE_MESSAGE_REACTION,
  UPDATE_CHATROOM,
  InsertMessageState,
  LoadState,
  AsyncAddChannelState,
  AsyncAddDMState,
  AsyncJoinDMState,
  SelectedChatroomState,
  AsyncLoadNextMessagesState,
  UpdateThreadState,
  UpdateChatroomState
} from '../types/chatroom-types';

export const loadAsync = (payload: LoadState) => ({ type: LOAD_ASYNC, payload });
export const initSidebarAsync = () => ({ type: INIT_SIDEBAR_ASYNC });
export const pickChannel = (payload: LoadState) => ({ type: PICK_CHANNEL_ASYNC, payload });
export const insertMessage = (payload: InsertMessageState) => ({ type: INSERT_MESSAGE, payload });
export const addChannel = (payload: AsyncAddChannelState) => ({ type: ADD_CHANNEL_ASYNC, payload });
export const addDM = (payload: AsyncAddDMState) => ({ type: ADD_DM_ASYNC, payload });
export const joinDM = (payload: AsyncJoinDMState) => ({ type: JOIN_DM_ASYNC, payload });
export const leaveChatroom = (payload: SelectedChatroomState) => ({ type: LEAVE_CHATROOM_ASYNC, payload });
export const resetSelectedChannel = () => ({ type: RESET_SELECTED_CHANNEL });
export const loadNextMessages = (payload: AsyncLoadNextMessagesState) => ({ type: LOAD_NEXT_MESSAGES_ASYNC, payload });
export const updateThread = (payload: UpdateThreadState) => ({ type: UPDATE_THREAD, payload });
export const createMessageReaction = (payload: socketMessageReactionState) => ({ type: ADD_MESSAGE_REACTION, payload });
export const deleteMessageReaction = (payload: socketMessageReactionState) => ({ type: DELETE_MESSAGE_REACTION, payload });
export const updateChatroom = (payload: UpdateChatroomState) => ({ type: UPDATE_CHATROOM, payload });

export const CREATE_MODAL_OPEN = 'CREATE_MODAL_OPEN';
export const CREATE_MODAL_CLOSE = 'CREATE_MODAL_CLOSE';
export const CHANNEL_MODAL_OPEN = 'CHANNEL_MODAL_OPEN';
export const CHANNEL_MODAL_CLOSE = 'CHANNEL_MODAL_CLOSE';
export const USERBOX_MODAL_OPEN = 'USERBOX_MODAL_OPEN';
export const USERBOX_MODAL_CLOSE = 'USERBOX_MODAL_CLOSE';

export interface CreateChannelModalState {
  isOpen: boolean;
}

export interface ChannelModalState {
  isOpen: boolean;
  x: number;
  y: number;
}

export interface UserBoxModalState {
  isOpen: boolean;
}

export interface ModalState {
  createModal: CreateChannelModalState;
  channelModal: ChannelModalState;
  userboxModal: UserBoxModalState;
}

interface CreateChannelModalOpenAction {
  type: typeof CREATE_MODAL_OPEN;
  payload: CreateChannelModalState;
}

interface CreateChannelModalCloseAction {
  type: typeof CREATE_MODAL_CLOSE;
  payload: CreateChannelModalState;
}

interface ChannelModalOpenAction {
  type: typeof CHANNEL_MODAL_OPEN;
  payload: ChannelModalState;
}

interface ChannelModalCloseAction {
  type: typeof CHANNEL_MODAL_CLOSE;
  payload: ChannelModalState;
}

interface UserBoxModalOpenAction {
  type: typeof USERBOX_MODAL_OPEN;
}

interface UserBoxModalCloseAction {
  type: typeof USERBOX_MODAL_CLOSE;
}

export type ModalTypes =
  | CreateChannelModalOpenAction
  | CreateChannelModalCloseAction
  | ChannelModalOpenAction
  | ChannelModalCloseAction
  | UserBoxModalOpenAction
  | UserBoxModalCloseAction;

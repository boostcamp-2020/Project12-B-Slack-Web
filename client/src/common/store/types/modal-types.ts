export const CREATE_MODAL_OPEN = 'CREATE_MODAL_OPEN';
export const CREATE_MODAL_CLOSE = 'CREATE_MODAL_CLOSE';
export const CHANNEL_MODAL_OPEN = 'CHANNEL_MODAL_OPEN';
export const CHANNEL_MODAL_CLOSE = 'CHANNEL_MODAL_CLOSE';

export interface CreateChannelModalState {
  isOpen: boolean;
}

export interface ChannelModalState {
  isOpen: boolean;
  x: number;
  y: number;
}

export interface ModalState {
  createModal: CreateChannelModalState;
  channelModal: ChannelModalState;
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

export type ModalTypes = CreateChannelModalOpenAction | CreateChannelModalCloseAction | ChannelModalOpenAction | ChannelModalCloseAction;

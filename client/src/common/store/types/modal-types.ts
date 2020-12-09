export const CREATE_MODAL_OPEN = 'CREATE_MODAL_OPEN';
export const CREATE_MODAL_CLOSE = 'CREATE_MODAL_CLOSE';

export interface CreateModalState {
  isOpen: boolean;
}

interface CreateChannelModalOpenAction {
  type: typeof CREATE_MODAL_OPEN;
  payload: CreateModalState;
}

interface CreateChannelModalCloseAction {
  type: typeof CREATE_MODAL_CLOSE;
  payload: CreateModalState;
}

export type ModalTypes = CreateChannelModalOpenAction | CreateChannelModalCloseAction;

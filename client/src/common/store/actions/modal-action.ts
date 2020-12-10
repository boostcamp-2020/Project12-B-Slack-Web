import {
  CREATE_MODAL_OPEN,
  CREATE_MODAL_CLOSE,
  CHANNEL_MODAL_OPEN,
  CHANNEL_MODAL_CLOSE,
  USERBOX_MODAL_OPEN,
  USERBOX_MODAL_CLOSE
} from '@store/types/modal-types';

export const createModalOpen = () => ({ type: CREATE_MODAL_OPEN });
export const createModalClose = () => ({ type: CREATE_MODAL_CLOSE });
export const channelModalOpen = (payload: any) => ({ type: CHANNEL_MODAL_OPEN, payload });
export const channelModalClose = () => ({ type: CHANNEL_MODAL_CLOSE });
export const userboxModalOpen = () => ({ type: USERBOX_MODAL_OPEN });
export const userboxModalClose = () => ({ type: USERBOX_MODAL_CLOSE });

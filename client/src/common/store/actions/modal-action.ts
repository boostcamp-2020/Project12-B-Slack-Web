import { CREATE_MODAL_OPEN, CREATE_MODAL_CLOSE } from '@store/types/modal-types';

export const createModalOpen = (payload: any) => ({ type: CREATE_MODAL_OPEN, payload });
export const createModalClose = (payload: any) => ({ type: CREATE_MODAL_CLOSE, payload });

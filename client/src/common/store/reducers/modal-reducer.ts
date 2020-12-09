import { CreateModalState, ModalTypes, CREATE_MODAL_OPEN, CREATE_MODAL_CLOSE } from '@store/types/modal-types';

const initialState: CreateModalState = {
  isOpen: false
};

const ModalReducer = (state = initialState, action: ModalTypes) => {
  switch (action.type) {
    case CREATE_MODAL_OPEN:
    case CREATE_MODAL_CLOSE:
      return { ...state, isOpen: action.payload.isOpen };
    default:
      return state;
  }
};

export default ModalReducer;

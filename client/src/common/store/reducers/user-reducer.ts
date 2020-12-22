import { UserState, UserTypes } from '@store/types/user-types';

const initialState: UserState = {
  userId: null,
  profileUri: '',
  displayName: ''
};

const UserReducer = (state = initialState, action: UserTypes) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default UserReducer;

const initialState = {
  userId: null,
  profileUri: '',
  displayName: ''
};

const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, userId: action.userId, profileUri: action.profileUri, displayName: action.displayName };
    case 'LOGOUT':
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default UserReducer;

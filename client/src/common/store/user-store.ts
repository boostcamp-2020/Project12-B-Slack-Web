import { createStore } from 'redux';

export default createStore((state: any, action: any) => {
  const initialInfo = {
    userId: 0,
    profileUri: '',
    displayName: ''
  };

  if (state === undefined) return initialInfo;

  switch (action.type) {
    case 'LOGIN':
      return { ...state, userId: action.userId, profileUri: action.profileUri, displayName: action.displayName };
    case 'LOGOUT':
      return { ...state, ...initialInfo };
    default:
      return state;
  }
});

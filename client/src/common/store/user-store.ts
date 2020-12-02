import { createStore } from 'redux';

export default createStore((state: any, action: any) => {
  if (state === undefined) {
    return { isLogin: false };
  }
  if (action.type === 'LOGIN') {
    return { ...state, isLogin: true };
  }
  if (action.type === 'LOGOUT') {
    return { ...state, isLogin: false };
  }
  return state;
});

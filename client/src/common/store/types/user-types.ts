export const LOGIN = 'LOGIN';
export const LOGIN_ASYNC = 'LOGIN_ASYNC';
export const LOGOUT = 'LOGOUT';

export interface userState {
  userId: number | null;
  profileUri: string;
  displayName: string;
}

interface userLoginAction {
  type: typeof LOGIN;
  payload: userState;
}

interface userLogoutAction {
  type: typeof LOGOUT;
}

export type UserTypes = userLoginAction | userLogoutAction;

export const LOGIN = 'LOGIN';
export const LOGIN_ASYNC = 'LOGIN_ASYNC';
export const LOGOUT = 'LOGOUT';

export interface UserState {
  userId: number | null;
  profileUri: string;
  displayName: string;
}

interface UserLoginAction {
  type: typeof LOGIN;
  payload: UserState;
}

interface UserLogoutAction {
  type: typeof LOGOUT;
}

export type UserTypes = UserLoginAction | UserLogoutAction;

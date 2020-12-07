import { LOGIN_ASYNC, LOGOUT } from '../types/user-types';

export const loginAsync = () => ({ type: LOGIN_ASYNC });
export const logout = () => ({ type: LOGOUT });

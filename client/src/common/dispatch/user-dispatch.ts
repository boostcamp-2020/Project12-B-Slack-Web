import { api } from '@utils/index';
import { store } from '@store/index';

const getUserInfo = async () => {
  const userInfo = await api.getUserInfo();
  store.dispatch({ type: 'LOGIN', ...userInfo });
};

export { getUserInfo };

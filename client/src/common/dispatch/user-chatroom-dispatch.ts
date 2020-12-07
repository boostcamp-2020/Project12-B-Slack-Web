import { api } from '@utils/index';
import store from '@store/index';

const getUserChatroom = async () => {
  const userChatroom = await api.getUserChatroom();
  store.dispatch({ type: 'INITSIDEBAR', ...userChatroom });
};

export { getUserChatroom };

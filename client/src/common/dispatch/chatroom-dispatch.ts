import { api } from '@utils/index';
import store from '@store/index';

const getChatroomInfo = async (selectedChatroomId: number) => {
  const chatroomInfo = await api.getChatroom(selectedChatroomId);
  store.dispatch({ type: 'LOAD', ...chatroomInfo });
};

export { getChatroomInfo };

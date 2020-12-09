import axios from 'axios';
import { logout } from '@utils/index';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common.Authorization = localStorage.getItem('token');

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) logout();
    return Promise.reject(error);
  }
);

export default {
  getToken: async (code: string | null) => {
    const response = await axios.get(`/oauth/github/${code}`);
    return response.headers.authorization;
  },

  oauthLogin: async () => {
    window.location.href = `${axios.defaults.baseURL}/oauth/github/login`;
  },

  getUserInfo: async () => {
    const response = await axios.get('/api/auth');
    return response.data;
  },

  getUserChatroom: async () => {
    const response = await axios.get('/api/user-chatrooms');
    return response.data;
  },

  getChatroom: async (id: number) => {
    const response = await axios.get(`/api/chatrooms/${id}`);
    return response.data;
  },

  postMessage: async (data: any) => {
    const response = await axios.post('api/messages', data);
    return response.data;
  },

  getMessages: async (chatRoomId: number) => {
    const response = await axios.get(`api/messages/${chatRoomId}`);
    return response.data;
  },

  getMessage: async (chatRoomId: number, messageId: number) => {
    const response = await axios.get(`api/messages/${chatRoomId}/${messageId}`);
    return response.data;
  },

  createChannel: async (title: string, description: string, isPrivate: boolean) => {
    const response = await axios.post(`api/chatrooms/channel`, { title, description, isPrivate });
    const { chatroomId } = response.data;
    return chatroomId;
  }
};

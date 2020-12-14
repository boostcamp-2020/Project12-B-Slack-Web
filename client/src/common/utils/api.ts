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

  getMessages: async (chatroomId: number) => {
    const response = await axios.get(`api/messages/${chatroomId}`);
    return response.data;
  },

  getMessage: async (chatroomId: number, messageId: number) => {
    const response = await axios.get(`api/messages/${chatroomId}/${messageId}`);
    return response.data;
  },

  getNextMessages: async (chatroomId: number, offsetId: number) => {
    const response = await axios.get(`api/messages/${chatroomId}/?offsetId=${offsetId}`);
    return response.data;
  },

  createChannel: async (title: string, description: string, isPrivate: boolean) => {
    try {
      const response = await axios.post(`api/chatrooms/channel`, { title, description, isPrivate });
      const { chatroomId } = response.data;
      return chatroomId;
    } catch (e) {
      throw new Error('Channel creation failed.');
    }
  },

  getChannels: async () => {
    const response = await axios.get(`api/chatrooms`);
    const channelCount = response.headers['x-total-count'];
    return { channels: response.data, channelCount };
  },

  getNextChannels: async (title: string) => {
    const response = await axios.get(`api/chatrooms?offsetTitle=${title}`);
    return response.data;
  },

  joinChannel: async (chatroomId: number) => {
    const response = await axios.post(`api/user-chatrooms`, { chatroomId });
    return response.data;
  },

  getThread: async (messageId: number) => {
    const response = await axios.get(`api/replies/${messageId}`);
    return response.data;
  },

  getNextReplies: async (messageID: number, offsetId: number) => {
    const response = await axios.get(`api/replies/${messageID}/?offsetId=${offsetId}`);
    return response.data;
  }
};

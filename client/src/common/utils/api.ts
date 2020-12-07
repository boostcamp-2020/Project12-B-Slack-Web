import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.common.Authorization = localStorage.getItem('token');

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
  }
};

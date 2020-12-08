import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
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
  }
};

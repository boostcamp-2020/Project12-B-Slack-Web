import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000';

const getToken = async (code: string | null) => {
  const response = await axios.get(`/oauth/github/${code}`);
  if (response.headers.authorization) {
    axios.defaults.headers.common.Authorization = response.headers.authorization;
    return response.headers.authorization;
  }
  return null;
};

const oauthLogin = async () => {
  window.location.href = `${axios.defaults.baseURL}/oauth/github/login`;
};

export { getToken, oauthLogin };

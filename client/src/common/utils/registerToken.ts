import { API, uriParser, auth } from '@utils/index';

const registerToken = async () => {
  if (uriParser.isExistParseCodeUrl()) {
    const code = uriParser.getCode();
    const token = await API.getToken(code);
    if (token) {
      localStorage.setItem('token', token);
      window.location.href = '/client/1';
    }
  } else if (auth.checkAuthToToken()) window.location.href = '/client/1';
  else window.location.href = '/login';
};

export default registerToken;

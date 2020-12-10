import { auth } from '@utils/index';

const blockPage = () => {
  if (auth.checkAuthToToken() && window.location.pathname === '/login') {
    window.location.href = '/';
  }
  if (!auth.checkAuthToToken() && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
};

export { blockPage };

const checkAuthToToken = () => {
  return !!localStorage.getItem('token');
};

const blockPage = () => {
  if (checkAuthToToken() && window.location.pathname === '/login') {
    window.location.href = '/';
  }
  if (!checkAuthToToken() && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
};

export { blockPage };

export const checkAuthToToken = () => {
  return !!localStorage.getItem('token');
};

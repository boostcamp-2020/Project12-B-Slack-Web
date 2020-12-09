export const logout = () => {
  window.localStorage.removeItem('token');
  window.location.href = '/login';
};

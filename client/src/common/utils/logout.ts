export const logout = () => {
  window.localStorage.removeItem('token');
  alert('토큰이 만료되어 로그아웃합니다.');
  window.location.href = '/login';
};

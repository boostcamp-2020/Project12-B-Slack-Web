import React from 'react';

interface LoginProps {
  children: React.ReactNode;
}

const Login: React.FC<LoginProps> = ({ children, ...props }) => {
  return <div {...props}>Login page</div>;
};

export { Login };

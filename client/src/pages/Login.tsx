import React from 'react';
import { FlexContainer } from '@components/templates';
import { LoginForm } from '@components/organisms';

interface LoginProps {
  children: React.ReactNode;
}

const Login: React.FC<LoginProps> = ({ children, ...props }) => {
  return (
    <FlexContainer {...props}>
      <LoginForm />
    </FlexContainer>
  );
};

export { Login };

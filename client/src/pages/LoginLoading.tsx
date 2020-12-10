import { registerToken } from '@utils/index';
import React, { useEffect } from 'react';

interface LoginProps {}

const LoginLoading: React.FC<LoginProps> = () => {
  useEffect(() => {
    registerToken();
  }, []);
  return <></>;
};

export { LoginLoading };

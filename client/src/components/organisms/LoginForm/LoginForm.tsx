import React from 'react';
import { Text, LogoImg } from '@components/atoms';
import { GithubLoginButton } from '@components/molecules';
import styled from 'styled-components';
import { color } from '@theme/index';
import { Size } from '@constants/index';

interface LoginFormProps {}

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 17rem;
`;

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <StyledLoginForm>
      <LogoImg size={Size.LARGE} />
      <Text size={Size.BIG} fontColor={color.primary} isBold={true}>
        Black에 로그인
      </Text>
      <Text fontColor={color.text_quinary} isBold={true}>
        로그인하려면 사용하는 Github 계정으로 계속해 주세요.
      </Text>
      <GithubLoginButton />
    </StyledLoginForm>
  );
};

export { LoginForm, LoginFormProps };

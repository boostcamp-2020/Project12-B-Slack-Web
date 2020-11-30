import React from 'react';
import { FlexContainer } from '@components/templates';
import { Text, LogoImg } from '@components/atoms';
import { GithubLoginButton } from '@components/molecules';
import styled from 'styled-components';

interface LoginProps {
  children: React.ReactNode;
}

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 17rem;
`;

const Login: React.FC<LoginProps> = ({ children, ...props }) => {
  return (
    <FlexContainer {...props}>
      <StyledLoginForm>
        <LogoImg size="large" />
        <Text size="big" color="black" isBold={true}>
          Black에 로그인
        </Text>
        <Text color="rgb(160, 158, 169)" isBold={true}>
          로그인하려면 사용하는 Github 계정으로 계속해 주세요.
        </Text>
        <GithubLoginButton />
      </StyledLoginForm>
    </FlexContainer>
  );
};

export { Login };

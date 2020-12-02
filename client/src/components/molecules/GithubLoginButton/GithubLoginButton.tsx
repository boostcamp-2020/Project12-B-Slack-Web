import React from 'react';
import { Button, Icon, Text } from '@components/atoms';
import styled from 'styled-components';
import { api } from '@utils/index';
import { store } from '@store/index';

interface GithubLoginButtonProps {
  size?: 'small' | 'large';
}

const TextWrap = styled.div`
  margin-left: 1rem;
`;

const handlingGithubLoginButton = async () => {
  store.dispatch({ type: 'LOGIN' });
  await api.oauthLogin();
};

const GithubLoginButton: React.FC<GithubLoginButtonProps> = ({ ...props }) => {
  return (
    <Button onClick={handlingGithubLoginButton} backgroundColor="black" borderColor="black" fontColor="black" {...props}>
      <Icon src="https://user-images.githubusercontent.com/32856129/98276858-ef6a0880-1fd9-11eb-9473-c8844c066cce.png" isHover={false} />
      <TextWrap>
        <Text color="white"> Github Login </Text>
      </TextWrap>
    </Button>
  );
};

export { GithubLoginButton, GithubLoginButtonProps };

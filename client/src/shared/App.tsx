import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Chatroom, Login } from '@pages/index';
import { Header, Sidebar } from '@components/organisms';
import { Channel, DM, Section } from '@components/molecules';
import { api, uriParser } from '@utils/index';
import { store } from '@store/index';

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 94%;
`;
const MainBox = styled.div`
  width: 77%;
  height: 100%;
`;

const App = () => {
  const registerToken = async () => {
    if (uriParser.isExistParseCode()) {
      const code = uriParser.getCode();
      const token = await api.getToken(code);
      if (token) {
        localStorage.setItem('token', token);
        window.location.href = '/';
      }
    }
  };

  const getUserInfo = async () => {
    const userInfo = await api.getUserInfo();
    store.dispatch({ type: 'LOGIN', ...userInfo });
  };

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

  useEffect(() => {
    registerToken().then(() => {
      blockPage();
      getUserInfo();
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Fragment>
          <Header />
          <Main>
            <Sidebar>
              <Section SectionName="Channels">
                <Channel isSelect={true}>5주-그룹-프로젝트-슬랙</Channel>
                <Channel>boost-ajae</Channel>
                <Channel>어몽어스</Channel>
              </Section>
              <Section SectionName="Direct Messages">
                <DM src="https://avatars0.githubusercontent.com/u/37091190?s=400&u=d358f361db0c43c0fccdcbd31de5ded89efe0169&v=4">J003_강동훈</DM>
                <DM src="https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4">J030_김도호</DM>
                <DM src="https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4">J211_탁성건</DM>
              </Section>
            </Sidebar>
            <MainBox>
              <Route exact path="/" component={Chatroom} />
            </MainBox>
          </Main>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

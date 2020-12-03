import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Chatroom, Login } from '@pages/index';
import { Header, Sidebar } from '@components/organisms';
import { api, uriParser, blockPage } from '@utils/index';
import { getUserInfo, getUserChatroom } from '@dispatch/index';

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

  useEffect(() => {
    registerToken().then(() => {
      blockPage();
      getUserInfo();
      getUserChatroom();
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Fragment>
          <Header />
          <Main>
            <Sidebar />
            <MainBox>
              <Route exact path="/" />
              <Route exact path="/client/:id" component={Chatroom} />
            </MainBox>
          </Main>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Chatroom, Login } from '@pages/index';
import { Header, Sidebar } from '@components/organisms';
import { registerToken, blockPage } from '@utils/index';
import { getUserInfo, getUserChatroom } from '@dispatch/index';
import { Main, MainBox } from '@components/templates';

const App = () => {
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

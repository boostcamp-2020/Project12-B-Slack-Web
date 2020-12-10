import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Chatroom, Login, ChatroomThread } from '@pages/index';
import { Header, Sidebar, CreateChannelModal } from '@components/organisms';
import { registerToken, blockPage } from '@utils/index';
import { Main, MainBox } from '@components/templates';

const App = () => {
  useEffect(() => {
    registerToken().then(() => {
      blockPage();
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
              <Route exact path="/client/:id/thread/:threadId" component={ChatroomThread} />
            </MainBox>
          </Main>
          <CreateChannelModal />
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

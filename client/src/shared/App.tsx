import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Chatroom, Login, ChannelBrowser } from '@pages/index';
import { Header, Sidebar, CreateChannelModal } from '@components/organisms';
import { registerToken, blockPage } from '@utils/index';
import { Main, MainBox, Body } from '@components/templates';
import { ChannelModal } from '@components/molecules';

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
          <Body>
            <Header />
            <Main>
              <Sidebar />
              <MainBox>
                <Route exact path="/" />
                <Route exact path="/client/:id" component={Chatroom} />
                <Route exact path="/channel-browser" component={ChannelBrowser} />
              </MainBox>
            </Main>
            <CreateChannelModal />
            <ChannelModal />
          </Body>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Chatroom, Login, LoginLoading, ChannelBrowser, ChatroomThread } from '@pages/index';
import { Header, Sidebar, CreateChannelModal, UserBoxModal } from '@components/organisms';
import { blockPage, uriParser } from '@utils/index';
import { Main, MainBox, Body } from '@components/templates';
import { ChannelModal, ProfileModal } from '@components/molecules';

const App = () => {
  useEffect(() => {
    if (!uriParser.isExistParseCodeUrl()) blockPage();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={LoginLoading} />
        <Fragment>
          <Body>
            <Header />
            <Main>
              <Sidebar />
              <MainBox>
                <Route exact path="/client/:id" component={withRouter(Chatroom)} />
                <Route exact path="/client/:id/thread/:threadId" component={withRouter(ChatroomThread)} />
                <Route exact path="/channel-browser" component={ChannelBrowser} />
              </MainBox>
            </Main>
            <CreateChannelModal />
            <ChannelModal />
            <UserBoxModal />
            <ProfileModal />
          </Body>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

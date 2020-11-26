import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Chatroom, Login } from '@pages/index';
import { Header, Sidebar } from '@components/organisms';
import { Channel, DM, Section } from '@components/molecules';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar>
        <Section SectionName="Channels">
          <Channel>5주-그룹-프로젝트-슬랙</Channel>
          <Channel>boost-ajae</Channel>
          <Channel>어몽어스</Channel>
        </Section>
        <Section SectionName="Direct Messages">
          <DM>J003_강동훈</DM>
          <DM>J030_김도호</DM>
          <DM>J211_탁성건</DM>
        </Section>
      </Sidebar>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Chatroom} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Chatroom, Login } from '@pages/index';
import { Header, Sidebar } from '@components/organisms';
import { Channel, DM, Section } from '@components/molecules';

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 94%;
`;
const MainBox = styled.div`
  width: 77%;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Header src="https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4" />
      <FlexBox>
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
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Chatroom} />
            <Redirect path="*" to="/" />
          </Switch>
        </MainBox>
      </FlexBox>
    </BrowserRouter>
  );
};

export default App;

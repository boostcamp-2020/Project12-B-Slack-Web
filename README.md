# 팀 협업 툴 - Black

<div align="middle">
  <img src="https://user-images.githubusercontent.com/59037261/102005062-4d1c0e00-3d59-11eb-8eff-3505540fc468.gif">
</div>

<p align="middle">
<!-- tag -->
  <a href="https://github.com/boostcamp-2020/Project12-B-Slack-Web/releases" target="_blank">
    <img src="https://img.shields.io/github/v/release/boostcamp-2020/Project12-B-Slack-Web">
  </a>
<!-- doc -->
  <a href="https://github.com/boostcamp-2020/Project12-B-Slack-Web/wiki" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
<!-- issue -->
  <a href="https://github.com/boostcamp-2020/Project12-B-Slack-Web/issues">
    <img alt="issue tracking" src="https://img.shields.io/github/issues/boostcamp-2020/Project12-B-Slack-Web"/>
  </a>
<!-- pr -->
  <a href="https://github.com/boostcamp-2020/Project12-B-Slack-Web/pulls">
    <img alt="pr tracking" src="https://img.shields.io/github/issues-pr/boostcamp-2020/Project12-B-Slack-Web"/>
  </a>
</p>
<p align="middle">
<!-- tag -->
  <img src='https://img.shields.io/static/v1?label=Node&message=12.18.3&color=success'/>
  <img src='https://img.shields.io/static/v1?label=React&message=17.0.1&color=blue'/>
  <img src='https://img.shields.io/static/v1?label=Express&message=4.17.1&color=yellow'/>
  <img src='https://img.shields.io/static/v1?label=MySQL&message=5.7.0&color=lightgrey'/>
  <img src='https://img.shields.io/static/v1?label=Jest&message=26.6.1&color=important'/>
</p>

## :house: [HomePage](http://black-boostcamp.kro.kr)

<br />

## :bookmark_tabs: 프로젝트 소개

팀 협업 메신저 Black은 Slack을 Clone한 프로젝트입니다. 또한 채널을 통한 메신저를 구축하면서 업무간 필요한 정보를 공유하는 웹 플랫폼입니다.

<br />

## :gear: 주요 기능

### :speech_balloon: Channel / DM

- 채널 목록 조회
- 채널 생성 (Private / Public)
- 채널에 참여중인 사용자 조회
- DM 생성

### :family: User

- GitHub 로그인
- 프로필 확인
- 로그아웃

### :email: Message

- 실시간 메시지 보내기
- 실시간 메시지 리액션 추가

### :incoming_envelope: Thread

- 실시간 댓글 추가
- 실시간 댓글 리액션 추가

<br />

## :man_cartwheeling: 팀원 소개

<div align="middle">

|                         J003 강동훈                          |                         J030 김도호                          |                         J211 탁성건                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://avatars0.githubusercontent.com/u/37091190?s=400&u=d358f361db0c43c0fccdcbd31de5ded89efe0169&v=4" width=200> | <img src="https://avatars2.githubusercontent.com/u/33643752?s=460&u=a9a75e7c6922a23eb365b258a60499bbb9a9c655&v=4" width=200> | <img src="https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4" width=200> |
|           아.. 폰 보느라<br />코딩 못했다.. :joy:            |  나는 개발자인<br />티를 내기 위해<br />노력했다 :computer:  |  나는 내 위가 없기 때문에<br />밑만 바라본다 :see_no_evil:   |

</div>

<br />

## :hammer_and_wrench: 기술 스택

![기술 스택](https://user-images.githubusercontent.com/59037261/102005071-5a38fd00-3d59-11eb-8988-74c3d8d00767.JPG)

<br />

## :pushpin: 기술 특장점

### :page_with_curl: Swagger Hub를 이용한 API 명세서 작성

  Swagger Hub를 이용해  API 명세서를 작성함으로써 FE/BE 협업을 쉽게 할 수 있도록 했습니다. 실제 사용되는 Parameter로 테스트할 수 있고, 어떤 방식으로 데이터를 주고받을지 확인할 수 있어서 개발 시간을 단축하고 불필요한 의사소통 비용을 줄일 수 있었습니다.

___

### :rainbow: CI/CD Pipeline

  CI/CD Pipeline을 구축해서 배포를 자동화했습니다. develop branch에서 개발을 진행하고, 배포 버전을 master branch에 PR을 남긴 후 merge를 하면 GitHub WebHook이 발생하도록 했습니다. Jenkins가 이를 감지해서 새롭게 작성한 코드를 기존에 작성한 스크립트를 활용하여 자동화된 통합, 빌드 및  배포를 진행합니다.

  이렇게 자동화된 지속적 통합, 지속적 배포를 통해 개발자는 편리한 개발 환경을 구축할 수 있습니다.

___

### :cyclone: docker-compose를 활용한 무중단 배포 (blue/green)

  docker-compose와 nginx를 이용하여 blue/green 배포 전략을 활용해 무중단 배포를 구현했습니다.  nginx의 load balancing을 활용해 2개의 포트로 트래픽이 갈 수 있도록 설정합니다. 그리고 새롭게 배포되는 과정에서 docker-compose를 활용해 기존에 배포된 컨테이너와 다른 포트로 컨테이너를 생성하고 완료되면 기존의 컨테이너를 삭제합니다.

  이를 통해 사용자는 새롭게 배포되는 과정에서 끊임 없는 서비스를 제공받을 수 있습니다.

___

### :closed_book: Atomic Design과 Storybook

  슬랙을 구현함에 있어서 프로필 이미지나 메시지, 입력창 등 일관된 디자인의 컴포넌트들이 많다는 생각을 했습니다. 그래서 Atomic Design을 적용해 단계를 나눠 작은 컴포넌트를 만들고, 그것들을 결합해 조금 더 큰 단위의 뷰를 만들었습니다.

  이를 통해 재사용 가능하고 일관된 디자인의 컴포넌트를 제작할 수 있었습니다.  또한 Storybook을 도입하여 디자인을 쉽게 수정하고 확인할 수 있도록 했습니다.

___

### :atom_symbol: Redux를 사용한 상태관리

  슬랙은 다수의 사용자가 공동으로 한 채널에서 작업을 할 수 있다는 점에서 트랜잭션 상태 관리가 중요하다고 생각이 들었습니다. 그래서 컴포넌트 간 상태 관리 로직을 관리하고 사용자의 액션과 데이터의 변경을 전역으로 관찰할 수 있다는 점에서 Redux와 비동기적 작업을 처리하기 위한 Redux-Saga를 채택하였습니다.

___

### :page_facing_up: Message Paging

  채널에 메시지가 늘어남에 따라 한 번에 여러 메시지를 받아오는 방식은 좋지 않다고 생각했습니다. 결국 Message Paging에 대해서 고려하게 되었고 offset과 limit을 두어 구현하게 되었습니다. offset으로는 가지고 있는 메시지의 가장 오래된 메시지 ID를 보내게 됩니다.

  Client 측에서는 Infinite Scroll을 구현하여 첫 렌더링을 빠르게 하기 위한 노력을 했습니다.  일정한 스크롤의 위치를 넘게 되면 요청을 보내게 되어 다음 메시지를 계속적으로 받아오게 됩니다.

___

### :blue_book: 프로젝트 전체에 TypeScript 도입

  TypeScript는 에러를 사전에 방지하고, 코드 자동 완성 및 가이드 기능을 사용할 수 있다는 장점을 가지고 있습니다. 이러한 장점을 프로젝트에 적용하고자 프로젝트 시작 전 다 같이 강좌를 구매하여 학습하였고 FE, BE 프로젝트에 직접 기술적으로 도전하게 되었습니다.

___

<br />

### 프로젝트가 궁금하다면 [Wiki](https://github.com/boostcamp-2020/Project12-B-Slack-Web/wiki)로~ :airplane:

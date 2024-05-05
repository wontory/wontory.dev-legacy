---
title: 'OAuth에 대해 알아보자'
description: 'What is Open Authorization?'
category: 'CS'
pubDate: '2024/05/01'
heroImage: './images/index.png'
draft: true
---

## OAuth는 어떻게 탄생했을까?

권한은 **인증(Authentication)**과 **인가(Authorization)**로 나눌 수 있습니다. 그렇다면 OAuth에서 Auth는 어떤 것을 의미하는 것일까요?

최근 여러 서비스들에서 사용자로 하여금 OAuth를 통해 로그인을 하도록 유도하는 것을 어렵지 않게 볼 수 있습니다. 회원가입과 로그인 절차가 간소화되는 장점 때문이죠. 이 때문에 우리는 OAuth의 Auth가 인증을 의미한다고 생각할 수 있습니다. 하지만 OAuth는 사실 인증을 위해 생겨난 개념이 아닙니다. 서비스와 서비스 사이의 권한을 인가하기 위해 탄생한 것인데요. 지금부터 한가지 재미있는 예시를 통해 OAuth를 살펴보도록 하겠습니다.

### 사진 인쇄 서비스

우리는 사진 인쇄 사업을 하고 있고, 이를 위한 웹사이트를 개발하려고 합니다. 우선 사진을 업로드할 수 있는 기능이 필요하겠네요. 하지만 요즘 사진을 기기에 저장하는 사람은 보기 드뭅니다. 클라우드에 업로드하죠. 이에 우리는 구글 드라이브 등을 통해 사진을 불러오도록 하고 싶습니다. 그러기 위해 우리는 사용자의 구글 계정을 연결해서 그들의 사진에 접근해야합니다.

어떻게 해야 할까요?

구글 드라이브에 접근하기 위해서는 구글 인증이 필요합니다. 사용자로부터 직접 구글 아이디와 비밀번호를 얻는다면 가능하겠네요. 하지만 이 방법은 무리가 있습니다. 사용자는 우리를 신뢰하지 않기 때문에 자신의 아이디와 비밀번호를 알려주고 싶지 않을 것입니다. 그리고 우리는 사용자의 민감한 정보를 저장/관리해야 하는 부담이 있고, 구글의 입장에서도 자신의 사용자 정보를 우리에게 맡기는 것이 안심되지 않을 것입니다.

여기에서 OAuth가 탄생하게 됩니다. 현재는 OAuth가 2.0까지 발전했으며, 대부분 OAuth 2.0이 사용되고 있습니다.

## OAuth의 흐름

OAuth의 흐름을 간단히 알아보겠습니다. 우리의 서비스는 구글 드라이브에 사용자의 사진을 요청합니다. 구글 드라이브는 사용자에게 이 요청을 허가할 것인지 확인하게 되고, 허가한다면 우리 서비스에 토큰(OAuth Access Token)을 발급합니다. 이제 이 토큰을 이용하면 우리는 사용자의 구글 드라이브에 제한적으로 접근할 수 있게 됩니다.

조금 더 자세히 살펴볼까요?

### Terminologies

- Resource
- Resource Owner
- Authorization Server
- Resource Server
- Client

OAuth에서 보안의 주체는 누가 될까요? 바로 Google의 Authorization Server입니다. 여기서 Authorization Server는 클라이언트에 access token을 발행하는 역할을 합니다.

### Authorization Code Flow

1. 사용

&nbsp;

> **참고 자료**
>
> - [What is OAuth really all about - OAuth tutorial - Java Brains](https://www.youtube.com/watch?v=t4-416mg6iU&t=1s)
> - [OAuth terminologies and flows explained - OAuth tutorial - Java Brains](https://www.youtube.com/watch?v=3pZ3Nh8tgTE)
> - [[10분 테코톡] 홍실의 OAuth 2.0](https://www.youtube.com/watch?v=Mh3LaHmA21I)
> - [[hudi.blog] OAuth 2.0 개념과 동작원리](https://hudi.blog/oauth-2.0/)
> - [[sooran.log] Auth에 대한 고민들](https://velog.io/@sooran/Auth%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EB%AF%BC%EB%93%A4)

---

brief: |
  현재 i18(MarkDown 명령줄 번역 도구) 및 i18n.site(다국어 정적 문서 사이트 생성기)라는 두 가지 오픈 소스 명령줄 도구가 구현되었습니다.

---


# i18n.site · MarkDown 번역 및 웹사이트 구축 도구가 이제 온라인에 있습니다!

반년이 넘는 개발 끝에 [https://i18n.site](//i18n.site)

현재 두 가지 오픈 소스 명령줄 도구가 구현되어 있습니다.

* `i18` : MarkDown 명령줄 번역 도구
* `i18n.site` : **독서 경험에 최적화된** 다국어 정적 문서 사이트 생성기

번역은 `Markdown` 형식을 완벽하게 유지할 수 있습니다. 파일 수정 사항을 식별하고 변경 사항이 있는 파일만 번역할 수 있습니다.

번역은 편집 가능합니다. 원본 텍스트를 수정하고 다시 기계 번역하면 수동으로 수정한 번역 내용을 덮어쓰지 않습니다(원본 텍스트의 이 단락을 수정하지 않은 경우).

[➤ 의 github 라이브러리를 승인하고 자동 i18n.site 팔로우](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 하고 **보너스 $50 받으려면** 여기를 클릭하세요.

## 기원

인터넷 시대에는 전 세계가 시장이며, 다국어화와 현지화는 기본이다.

기존 번역 관리 도구는 너무 무겁습니다. 버전 `git` 관리에 의존하는 프로그래머에게는 여전히 명령줄을 선호합니다.

그래서 번역 도구 `i18` 을 개발하고, 번역 도구를 기반으로 다국어 정적 사이트 생성기 `i18n.site` 구축했습니다.

![](https://p.3ti.site/1723777556.avif)

이것은 시작에 불과하며, 할 일이 훨씬 더 많습니다.

예를 들어, 정적 문서 사이트를 소셜 미디어 및 이메일 구독과 연결하면 업데이트가 출시되는 시점에 사용자에게 연락할 수 있습니다.

예를 들어, 다국어 포럼과 작업 주문 시스템을 모든 웹 페이지에 삽입할 수 있어 사용자가 장벽 없이 소통할 수 있습니다.

## 오픈 소스

프런트엔드, 백엔드, 명령줄 [코드는 모두 오픈 소스입니다](https://i18n.site/i18n.site/c/src) (번역 모델은 아직 오픈 소스가 아닙니다).

사용된 기술 스택은 다음과 같습니다.

프론트엔드 [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

명령줄과 백엔드는 Rust를 기반으로 개발되었습니다.

[axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

명령줄 [내장 js 엔진 boa_engine](https://docs.rs/boa_engine) , [내장 데이터베이스 fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

[mariadb](https://mariadb.org) [kvrocks](https://kvrocks.apache.org)

자체 제작 [chasquid](https://github.com/albertito/chasquid) 으로 메일을 보내세요 SMTP

## 문의하기

새로운 제품이 출시되면 문제는 불가피합니다.

Google 포럼 [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) 을 통해 언제든지 문의해 주세요 :
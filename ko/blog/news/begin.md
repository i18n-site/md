# i18n.site · MarkDown 번역 및 웹사이트 구축 도구, 온라인으로 출시되었습니다!

반년이 넘는 개발 끝에 [https://i18n.site](//i18n.site) 출시되었습니다.

현재 두 가지 오픈 소스 명령줄 도구가 구현되어 있습니다

* `i18` : MarkDown 명령줄 번역 도구
* `i18n.site` : **독서 경험을 위한 최적화된** 다국어 정적 문서 사이트 생성기

번역은 `Markdown` 형식을 완벽하게 유지할 수 있습니다. 파일의 변경 사항을 인식하여 변경된 파일만 번역합니다.

번역은 편집 가능합니다. 원본 텍스트를 수정하고 다시 기계 번역하면 수동으로 수정한 번역 내용을 덮어쓰지 않습니다(원문의 이 단락을 수정하지 않은 경우).

[여기를 클릭하여 i18n.site 의 github 승인하고 자동으로 팔로우](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 하고 **보너스 $50 받으세요** .

## 기원

인터넷 시대에는 전 세계가 시장이며, 다국어화와 현지화는 기본입니다.

기존의 번역 관리 도구들은 너무 무겁습니다. `git`을 사용한 버전 관리를 하는 프로그래머들은 여전히 명령줄을 선호합니다.

그래서 번역 도구 `i18`을 개발하고, 이를 기반으로 다국어 정적 사이트 생성기 `i18n.site`를 구축했습니다.

![](https://p.3ti.site/1723777556.avif)

이것은 시작에 불과하며, 하고 싶은 일이 많습니다.

예를 들어, 정적 문서 사이트를 소셜 미디어와 이메일 구독과 연결하여 업데이트를 발표할 때 사용자에게 즉시 알릴 수 있습니다.

또한, 다국어로 작동하는 포럼과 작업 티켓 시스템을 모든 웹 페이지에 내장하여 사용자가 원활하게 소통할 수 있도록 할 수 있습니다.

## 오픈 소스

프론트엔드, 백엔드, 명령줄 [코드는 모두 오픈 소스입니다](https://i18n.site/i18n.site/c/src) (번역 모델은 아직 오픈 소스가 아닙니다).

사용된 기술 스택은 다음과 같습니다

프론트엔드 [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

명령줄과 백엔드는 Rust를 기반으로 개발되었습니다.

백엔드는 [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases)를 사용합니다.

명령줄은 [내장된 JavaScript 엔진 boa_engine](https://docs.rs/boa_engine), [내장된 데이터베이스 fjall](https://github.com/fjall-rs/fjall)를 사용합니다.

서버 VPS는 [contabo](https://my.contabo.com)를 사용합니다

데이터베이스는 [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org)를 사용합니다.

메일 전송은 자체 SMTP [chasquid](https://github.com/albertito/chasquid)를 사용합니다.

## 문의하기

새로운 제품이 출시되면 문제는 불가피합니다.

Google 포럼을 통해 언제든지 문의해 주세요: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
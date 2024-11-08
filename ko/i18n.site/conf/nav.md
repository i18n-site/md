# 맞춤형 탐색

탐색을 사용자 정의하는 방법을 설명하기 위해 데모 사이트를 예로 들어 보겠습니다 [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

위 그림에서 번호가 매겨진 영역에 해당하는 파일은 다음과 같습니다.

1. 왼쪽 [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. 오른쪽 [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) `HTML` 을 생성하는 템플릿 언어입니다.

[➔ 의 문법을 배우려면 여기를 클릭하세요 pug](https://pugjs.org)

형식 문자열 `${I18N.sponsor}` 파일에서 국제화를 구현하는 데 사용되며 해당 내용은 소스 언어 디렉터리의 해당 [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) 로 대체됩니다.

**`pug` 에 `css` 과 `js` 쓰지 마십시오** . 그렇지 않으면 오류가 발생합니다.

스타일은 `css` 에 기록되며 웹 구성 요소를 생성하여 상호 작용이 이루어집니다.

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) 네비게이션 바 스타일에 해당하는 파일은 :
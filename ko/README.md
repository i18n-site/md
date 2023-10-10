<h1 style="justify-content:space-between">3Ti.Site · 국경은 없다고 생각하세요<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

다국어 정적 사이트 생성기인 3Ti.Site는 Markdown을 [100개 이상의 언어](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 로 자동 번역할 수 있습니다.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

어떤 사람들은 이제 브라우저에 번역 기능이 내장되어 있으므로 웹사이트를 국제화할 필요가 없는지 묻고 싶어할 수도 있습니다.

**전체 사이트를 국제화해야만 다국어 사이트 내 전체 텍스트 검색 및 검색 엔진 최적화를 지원할 수 있다고** 말하고 싶습니다.

## 순서

"성경·창세기":

> 고대인들은 언어를 구별하지 않았습니다. 그들은 자부심을 가지고 태어났으며 꼭대기가 하늘에 닿는 높은 탑을 만들고 싶었습니다.
> <blockquote><p>하나님은 사람의 교만을 노엽게 여기사 모든 중생을 서로 깨닫지 못하게 하시고 각처에 흩으셨느니라.</p></blockquote>
> <blockquote><p>그 이후로 인간의 의사소통이 어려워지고 분쟁이 계속되어 세상에 바벨탑은 없습니다.</p></blockquote>

SF 소설 &#39;삼체&#39;(중국어 발음: `3Ti` )는 전자파를 통해 소통하고, 언어 장벽이 없으며, 기술적으로 번영하는 외계 문명을 가상화한 작품입니다.

이 도구의 도움으로 지구상의 사람들이 삼체의 사람들처럼 되고, 의사소통이 언어의 제약을 받지 않고, 온 인류가 다시 하나가 되기를 바랍니다.

## 지도 시간

## 기능 소개

### 마크다운 형식 유지

### 번역 수정

번역을 수정한 후 `./i18n.sh` 다시 실행하여 캐시를 업데이트해야 합니다.

### 번역 노트

번역 주석은 ` ` ```rust` ` 뒤에 언어를 표시해야 합니다.

현재 Rust, c, cpp, java, js, Coffee, Python 및 bash에 대한 주석 번역을 지원합니다.

더 많은 언어의 댓글에 대한 번역 지원을 추가하려면 [tran_md/src/comment.coffee를](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) 편집하세요.

### 프록시 구성

다음 환경 변수를 설정하면 Google Translate API 호출이 프록시를 통과할 수 있습니다.

```bash
export https_proxy=http://127.0.0.1:7890
```

### 변수 임베딩

```
test: 测试变量<br 0>嵌入
```

### 캐시 비우기

```bash
rm -rf .i18n/.cache
```

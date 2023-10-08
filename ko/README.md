# I18N.SITE · 국경 없는 언어<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE는 [100개 이상의 다양한 언어](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 로 자동 번역을 지원하는 정적 사이트 생성기입니다.

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

어떤 사람들은 이제 브라우저에 번역 기능이 내장되어 있으므로 웹사이트를 국제화할 필요가 없는지 묻고 싶어할 수도 있습니다.

**전체 사이트를 국제화해야만 다국어 사이트 내 전체 텍스트 검색 및 검색 엔진 최적화를 지원할 수 있다고** 말하고 싶습니다.

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
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### 변수 임베딩

```
test: 测试变量<br 0>嵌入
```

### 캐시 비우기

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```

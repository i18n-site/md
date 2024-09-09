# 플러그인

`.i18n/conf.yml` 파일에서 플러그인을 설정할 수 있습니다

```yml
addon:
  - i18n.addon/toc
```

## 공식 플러그인

* `i18n.addon/toc` : 디렉토리 색인
  `TOC`를 기준으로 디렉토리 색인을 생성하는 `json`을 기본적으로 활성화합니다

* `i18n.addon/mouse` : 마우스 효과

## 파일 이름 지정 규칙

플러그인은 모두 `npm` 패키지입니다.

위의 `i18n.addon/toc`에 해당하는 패키지는 [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)입니다.

플러그인은 기본적으로 최신 버전을 사용하며, 매주 업데이트 여부를 확인합니다.

버전을 고정하고 싶다면 `i18n.addon/toc@0.1.3`와 같이 작성하면 됩니다.

번역 명령어 `i18n.site`는 플러그인 패키지의 규약 파일을 설치하고 실행합니다.

규약된 파일 이름은 다음과 같습니다

### htmIndex.js

`htmIndex.js`는 `.i18n/htm/index.js`의 맨 뒤에 주입됩니다.

`__CONF__`는 현재 설정의 이름(예: `dev` 또는 `ol`)로 치환됩니다.

### afterTran.js

번역이 완료된 후 호출되며, 전달되는 매개변수는 다음과 같습니다.

* `lang_li` : 언어 목록, 첫 번째 언어가 원본 언어입니다
* `changed` : 변경된 파일
* `root` : 프로젝트의 루트 디렉토리

반환 값은 다음과 같은 딕셔너리입니다

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file`은 출력 파일 목록, `path`는 파일 경로, `txt`는 파일 내용입니다.

## 내장 함수

내장된 `js` 런타임은 [boa](https://github.com/boa-dev/boa)를 기반으로二次 개발되었으며, 내장된 함수는 다음과 같습니다:

* `wPath(path, txt)` : 파일에 쓰기
* `rTxt(path)` : 텍스트 파일 읽기
* `rBin(path)` : 바이너리 파일 읽기
* `rDir(dirpath)` : 디렉토리를 읽고 디렉토리 목록과 파일 목록을 반환합니다

## 개발 가이드

플러그인 개발은 [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)을 참조할 수 있습니다
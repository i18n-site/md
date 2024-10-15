# 플러그인

플러그인은 다음과 같이 `.i18n/conf.yml` 에서 구성할 수 있습니다.

```yml
addon:
  - i18n.addon/toc
```

## 공식 플러그인

* `i18n.addon/toc` : 디렉토리 색인
  `TOC` 기준으로 `json` 의 디렉터리 인덱스를 생성하며 기본적으로 활성화됩니다.

* `i18n.addon/mouse` : 마우스 효과

## 파일 이름 규칙

플러그인은 모두 `npm` 패키지입니다.

위의 `i18n.addon/toc` 에 해당하는 패키지는 [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

플러그인은 기본적으로 최신 버전을 사용하며 매주 업데이트를 확인합니다.

버전을 수정하려면 `i18n.addon/toc@0.1.3` 쓰면 됩니다.

번역 명령줄 `i18n.site` 플러그인 패키지의 규칙 파일을 설치한 후 실행합니다.

합의된 파일명은 다음과 같습니다

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` 의 끝에 주입됩니다.

여기서 `__CONF__` 현재 구성의 이름(예: `dev` 또는 `ol` )으로 대체됩니다.

### afterTran.js

번역이 완료된 후 호출되며, 전달되는 매개변수는 다음과 같습니다.

* `lang_li` : 언어 목록, 첫 번째 언어가 소스 언어입니다.
* `changed` : 수정된 파일
* `root` : 프로젝트 루트 디렉터리

반환 값은 다음과 같은 사전입니다.

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` 은 출력 파일 목록, `path` 은 파일 경로, `txt` 는 파일 내용입니다.

## 내장 기능

내장 `js` 런타임은 [boa](https://github.com/boa-dev/boa) 의 2차 개발을 기반으로 하며 내장 기능은 다음과 같습니다 :

* `wPath(path, txt)` : 파일에 쓰기
* `rTxt(path)` : 텍스트 파일 읽기
* `rBin(path)` : 바이너리 파일 읽기
* `rDir(dirpath)` : 디렉토리를 읽으십시오. 반환 값은 배열입니다. : list, file list

## 개발 가이드

플러그인 개발에 참고가 될 수 있습니다 [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
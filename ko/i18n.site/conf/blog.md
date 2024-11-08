# 블로그 템플릿

`i18n/conf.yml` `use: Blog` 렌더링에 블로그 템플릿을 사용한다는 의미입니다.

블로그 게시물의 `markdown` 파일에는 메타 정보를 구성해야 합니다.

메타 정보는 파일 시작 부분에 있어야 하며 `---` 으로 시작하고 `---` 로 끝나야 합니다. 중간에 있는 구성 정보의 형식은 `YAML` 입니다.

데모 파일의 구성은 다음과 같습니다.

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` 블로그 색인 페이지에 표시될 콘텐츠 요약을 나타냅니다.

`YMAL` '의 도움으로 | `구문, 여러 줄 요약을 작성할 수 있습니다.

블로그 오른쪽의 디렉토리 트리 구성도 `TOC` 파일입니다(이전 장 참조). `TOC` 에 나열된 기사만 블로그 홈페이지 색인에 나타납니다.

메타정보가 포함되지 않은 글은 블로그 홈페이지에는 나타나지 않지만, 오른쪽 디렉토리 트리에는 나타날 수 있습니다.

## 저자 정보

작성자 정보는 다음과 같이 기사의 메타 정보에 기록될 수 있습니다.

```yml
author: marlowe
```

그런 다음 소스 언어 디렉토리에서 `author.yml` 편집하고 !와 같은 작성자 정보를 추가하십시오 :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` , `title` 는 모두 선택 사항입니다. `name` 설정하지 않으면 키 이름(여기서는 `marlowe` )이 `name` 로 사용됩니다.

데모 프로젝트 [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) 및 [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) 보기

## 고정된 기사

기사를 상단에 고정해야 하는 경우 `i18n.site` 실행하고 `.i18n/data/blog` 아래의 `xxx.yml` 파일을 편집하고 타임스탬프를 음수로 변경하세요(여러 개의 음수는 가장 큰 것부터 가장 작은 것 순으로 정렬됩니다).
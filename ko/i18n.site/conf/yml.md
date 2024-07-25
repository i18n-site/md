# .i18n/conf.yml

`i18n.site` 구성 파일은 `.i18n/conf.yml` 입니다.

[`i18`](/i18) 의 `ignore:` 및 `i18n:` 설정을 제외하고 구성 파일은 다음과 같습니다.

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

그 중 `upload` 의 구성 항목 `ext:` 게시 시 `.md` 만 업로드된다는 의미입니다.

## 상단 탐색 탐색

`nav:` 홈페이지 상단의 탐색 메뉴에 해당하는 구성 옵션입니다.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

그 중 `i18n: home` `en/i18n.yml`中`home: Home` 에 해당합니다.

`en/i18n.yml` 는 `zh/i18n.yml` 과 같은 여러 언어로 번역됩니다.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

번역이 완료된 후 번역 중 `yml` 값을 수정할 수 있지만 번역 `yml` 키를 추가하거나 삭제하지 마세요.

### `use: Toc` , 단일 파일 템플릿(개요 포함)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` 단일 `Markdown` 템플릿을 렌더링하는 `Toc` 렌더링을 사용하는 것을 의미합니다.

`TOC` 는 `Table of Contents` 의 약어입니다. 이 템플릿이 렌더링되면 이 `Markdown` 파일의 윤곽이 사이드바에 표시됩니다.

`url:` `Markdown` 의 파일 경로를 나타냅니다( `/` 루트 디렉터리에 해당합니다 `/README.md` , 이 파일 이름에는 대문자 접두사와 소문자 접미사가 필요함).

### `use: Md` , 단일 파일 템플릿(개요 없음)

`Md` 템플릿은 `Toc` 과 동일하며 둘 다 단일 `Markdown` 파일을 렌더링하는 데 사용됩니다. 그러나 `Md` 템플릿은 사이드바에 개요를 표시하지 않습니다.

위 구성에서 `use: Toc` `use: Md` 으로 수정하고 `i18n.site` `md` 디렉터리에서 다시 실행한 후 개발 미리보기 URL을 방문하여 홈페이지에서 변경 사항을 관찰할 수 있습니다.

### 구성 경로 없이 기본 로딩

접근 중인 특정 경로의 경로 접두사가 `nav:` 에 구성되어 있지 않으면 해당 경로에 해당하는 `MarkDown` 파일이 기본적으로 로드되고 `Md` 템플릿을 사용하여 렌더링됩니다.

예를 들어 `/test` 방문하고 `nav:` 이 경로 없이 구성되고 페이지 언어가 영어(코드 `en` )인 경우 기본적으로 템플릿이 로드 `/en/test.md` `Md` 사용하여 렌더링됩니다.

`/en/test.md` 이 파일이 없으면 기본 `404` 페이지가 표시됩니다.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , 다중 파일 템플릿

구성 파일에서:

```
  - i18n: blog
    use: Doc
```

템플릿 렌더링에 `Doc` 사용함을 나타냅니다.

`Doc` 템플릿은 단일 또는 여러 프로젝트에 대한 문서 개요를 생성하기 위해 여러 `MarkDown` 통합하는 것을 지원합니다.

#### 단일 프로젝트(여러 파일)

`blog` 는 `Doc` 의 단일 프로젝트 모드입니다.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url이 비어 있으면 기본값은 i18n입니다.

`url` 쓰지 않으면 `url` `i18n` 값으로 설정됩니다. 이 규칙은 다른 템플릿에도 적용됩니다.

위의 작성 방법은 `url: blog` 갖는 것과 동일하며 해당 파일은 `en/blog/TOC` 입니다.

#### 여러 프로젝트

`.i18n/conf.yml` `i18n:doc` 의 구성은 다중 프로젝트 모드입니다.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

여기서 `menu: NB demo1,demo2` `NB` 사용하여 드롭다운 메뉴를 렌더링하는 것을 의미합니다.

`NB` 는 `Name Breif` 의 약어로, 드롭다운 메뉴에 프로젝트의 이름과 슬로건이 표시될 수 있음을 나타냅니다.

`NB` 뒤에는 매개변수 `demo1,demo2` 이 전달됩니다.
참고 : ** 의 쉼표 `,` 앞뒤에는 공백 ** 없어야 합니다 `demo1,demo2`

위 매개변수의 경우 해당 디렉터리 인덱스 파일은 다음과 같습니다.

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC 목차 색인

`i18n.site` 데모 웨어하우스에서 `js` 플러그인 `.i18n/hook/after.tran/TOC.js` 실행하여 디렉토리 색인 파일 `doc` 템플릿 구성에 해당 `TOC` 을 읽고 디렉토리 개요의 `json` 생성합니다.

`doc` 템플릿을 사용한다면 이 플러그인이 있어야 합니다.

빈 폴더에서 `i18n.site` 프로젝트를 초기화하는 경우 데모 프로젝트의 `.i18n` 디렉터리에 복사해야 합니다.

`Doc` 템플릿은 생성된 `json` 기반으로 목차 개요를 렌더링합니다.

##### 자세한 내용 설명

`en/blog/TOC` 내용은 다음과 같습니다 :

```
README.md

news/README.md
  news/begin.md
```

##### 들여쓰기를 사용하여 수준 표시

위 `en/blog/TOC` 첫 번째 줄의 `README.md` 아래 그림의 `i18n.site` 에 해당하며 이는 프로젝트 이름입니다.

다음 두 줄은 아래 스크린샷과 같습니다.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` 에 해당합니다.
`news/begin.md` `Our Product is Online !` 에 해당합니다.

`TOC` 파일은 외곽선의 계층적 관계를 나타내기 위해 들여쓰기되어 있으며 다단계 들여쓰기를 지원합니다.

##### 상위 수준에서는 내용이 아닌 제목만 작성합니다.

여러 수준의 들여쓰기가 있는 경우 상위 수준에서는 내용이 아닌 제목만 작성합니다. 그렇지 않으면 타이포그래피가 엉망이 될 것입니다.

##### 프로젝트 README.md 

`README.md` 예를 들어 `en/demo2/README.md` 에 콘텐츠를 작성할 수 있습니다.

참고로 본 파일의 내용은 목차 개요를 보여주지 않으므로 길이를 제한하고 짧은 소개를 작성하는 것이 좋습니다.

###### 프로젝트 슬로건

보시다시피 `Deme Two` 드롭다운 메뉴와 카탈로그 개요 프로젝트 이름 아래에 해당 프로젝트 슬로건 : `Your Project slogan` 있습니다.

<img alt="" src="https://p.3ti.site/1721276842.avif">

: 첫 번째 줄에 해당합니다 `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

프로젝트 `README.md` 1단계 제목의 첫 번째 콜론 `:` 이후의 내용이 프로젝트 슬로건으로 간주됩니다.

중국, 일본, 한국 사용자는 전자 콜론 대신 반각 콜론을 사용해야 합니다 `:`

##### TOC를 대량으로 이동하는 방법은 무엇입니까?

`TOC` 파일은 소스 언어의 디렉토리에 있어야 합니다.

예를 들어 소스 언어가 중국어인 경우 위의 `TOC` 는 `zh/blog/TOC` 입니다.

소스 언어가 수정된 경우 프로젝트의 특정 언어로 된 `TOC` 다른 언어로 일괄 이동해야 합니다.

다음 명령을 참조할 수 있습니다.

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

위 명령의 `en/` 및 `zh/` 언어 코드로 수정하세요.



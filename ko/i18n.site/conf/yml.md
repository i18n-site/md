# .i18n/conf.yml

`i18n.site`의 프로필은 `.i18n/conf.yml`입니다.

[`i18`](/i18)의 `ignore:`와 `i18n:` 설정을 제외한 구성 파일은 다음과 같습니다

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

그 중 `upload`의 `ext:` 구성 항목은 게시 시에만 `.md` 파일을 업로드라는 의미입니다.

## 상단 탐색 메뉴

`nav:` 구성 옵션은 홈 페이지 상단의 탐색 메뉴에 해당합니다.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

그 중 `i18n: home`은 `en/i18n.yml`의 `home: Home`에 해당합니다.

`en/i18n.yml`은 `zh/i18n.yml`과 같이 여러 언어로 번역됩니다.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

번역이 완료된 후, 번역된 `yml`의 값을 수정할 수 있지만, 번역된 `yml`의 키는 추가하거나 삭제하지 마세요.

### `use: Toc`, 단일 파일 템플릿(개요 포함)

`nav` 구성에서:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc`는 단일 `Markdown` 템플릿을 렌더링하는 `Toc` 템플릿을 사용한다는 의미입니다.

`TOC`는 `Table of Contents`의 약자로, 이 템플릿이 렌더링될 때 이 `Markdown` 파일의 개요가 사이드바에 표시됩니다.

`url:`는 `Markdown` 파일의 경로를 나타냅니다( `/`은 루트 디렉토리 `/README.md`에 해당하며, 파일 이름은 대문자 접두사와 소문자 접미사를 가져야 합니다).

### `use: Md`, 단일 파일 템플릿(개요 없음)

`Md` 템플릿과 `Toc` 템플릿은 동일하게 단일 `Markdown` 파일을 렌더링하는 데 사용되지만, `Md` 템플릿은 사이드바에 개요를 표시하지 않습니다.

위의 구성에서 `use: Toc`를 `use: Md`로 변경하고, `md` 디렉토리에서 `i18n.site`를 다시 실행한 후, 개발 미리보기 URL을 방문하여 홈페이지의 변경 사항을 관찰할 수 있습니다.

### 구성 경로 없는 기본 로딩

어떤 경로에 액세스할 때, 해당 경로의 접두어가 `nav:`에 구성되지 않은 경우, 해당 경로에 해당하는 `Markdown` 파일이 기본적으로 로드되고 `Md` 템플릿으로 렌더링됩니다.

예를 들어, `/test`에 액세스하고 `nav:` 구성이 없으며 페이지 언어가 영어(코드 `en`)인 경우, 기본적으로 `/en/test.md`가 로드되고 `Md` 템플릿으로 렌더링됩니다.

`/en/test.md` 파일이 없는 경우, 기본 `404` 페이지가 표시됩니다.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, 다중 파일 템플릿

구성 파일에서:

```
  - i18n: blog
    use: Doc
```

템플릿 렌더링 시 `Doc`를 사용하는 것을 나타냅니다.

`Doc` 템플릿은 여러 `Markdown` 파일을 통합하여 단일 또는 여러 프로젝트의 문서 개요를 생성하는 것을 지원합니다.

#### 단일 프로젝트(여러 파일)

위의 `blog`는 `Doc`의 단일 프로젝트 모드입니다.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url이 비어 있을 경우, 기본적으로 i18n의 값을 가집니다

`url`을 작성하지 않으면, `url`의 기본값은 `i18n`입니다. 이 규칙은 다른 템플릿에도 적용됩니다.

위의 작성 방법은 `url: blog`과 동일하며, 해당 파일은 `en/blog/TOC`입니다.

#### 다중 프로젝트

`.i18n/conf.yml`의 `i18n:doc` 구성은 다중 프로젝트 모드입니다.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

여기서 `menu: NB demo1,demo2`는 `NB` 템플릿을 사용하여 드롭다운 메뉴를 렌더링한다는 의미입니다.

`NB`는 `Name Brief`의 약자로, 드롭다운 메뉴에 프로젝트의 이름과 슬로건을 표시할 수 있습니다.

`NB` 뒤에는 매개변수 `demo1,demo2`가 전달됩니다.
참고로, **`demo1,demo2`의 쉼표 `,` 앞뒤에는 공백이 없어야 합니다**.

위 매개변수에 해당하는 디렉토리 인덱스 파일은 다음과 같습니다

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC 목차 색인

`i18n.site`는 데모 리포지토리에서 `js` 플러그인 `.i18n/hook/after.tran/TOC.js`를 실행하여 `TOC` 템플릿 구성에 해당하는 `doc` 템플릿의 디렉토리 인덱스 파일을 읽고 `json` 목차 개요를 생성합니다.

`doc` 템플릿을 사용하는 경우 이 플러그인이 필요합니다.

빈 폴더에서 `i18n.site` 프로젝트를 초기화할 때는 데모 프로젝트의 `.i18n` 디렉토리를 복사해야 합니다.

`Doc` 템플릿은 생성된 `json`을 기반으로 목차 개요를 렌더링합니다.

##### 내용 설명

`en/blog/TOC`의 내용은 다음과 같습니다:

```
README.md

news/README.md
  news/begin.md
```

##### 들여쓰기를 사용하여 계층을 나타냅니다

`en/blog/TOC`의 첫 번째 행에 있는 `README.md`는 아래 그림의 `i18n.site`에 해당하며, 이는 프로젝트 이름입니다.

다음 두 줄은 아래 스크린샷과 같습니다.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md`는 `News`에 해당합니다
`news/begin.md`는 `Our Product is Online !`에 해당합니다

`TOC` 파일은 계층적 관계를 나타내기 위해 들여쓰기되어 있으며, 다단계 들여쓰기를 지원합니다.

##### 상위 수준에서는 제목만 작성하고 내용은 작성하지 않습니다

여러 단계의 들여쓰기가 있는 경우, 상위 수준에서는 제목만 작성하고 내용은 작성하지 않습니다. 그렇지 않으면 형식이 깨질 수 있습니다.

##### 프로젝트 README.md

프로젝트의 `README.md`는 예를 들어 `en/demo2/README.md`에 작성할 수 있습니다.

이 파일의 내용은 목차 개요를 보여주지 않으므로, 길이를 제한하고 짧은 소개를 작성하는 것이 좋습니다.

###### 프로젝트 슬로건

`Deme Two`는 드롭다운 메뉴와 목차 개요 프로젝트의 이름 아래에 `Your Project slogan` 슬로건이 표시됩니다.

![](https://p.3ti.site/1721276842.avif)

이는 `en/demo2/README.md`의 첫 번째 행에 해당합니다:

```
# Demo Two : Your Project slogan
```

프로젝트 `README.md`의 1단계 제목의 첫 번째 콜론 `:` 뒤의 내용을 프로젝트 슬로건으로 간주합니다.

중국, 일본, 한국 사용자는 전각 콜론 대신 반각 콜론 `:`를 사용해야 합니다.

##### TOC를 대량으로 이동하는 방법은 무엇인가요?

`TOC` 파일은 소스 언어 디렉토리에 있어야 합니다.

예를 들어, 소스 언어가 중국어인 경우, 위의 `TOC`는 `zh/blog/TOC`입니다.

소스 언어가 변경된 경우, 프로젝트 내 특정 언어의 `TOC` 파일을 다른 언어로 일괄 이동해야 합니다.

다음 명령을 참조할 수 있습니다

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

위 명령의 `en/`과 `zh/` 언어 코드를 수정하세요.
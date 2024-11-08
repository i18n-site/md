# 설치 및 사용

## Windows 먼저 git bash 설치

windows 시스템을 [먼저 다운로드하고 `git bash` 하려면 여기를 클릭](https://git-scm.com/download/win) 하세요.

`git bash` 에서 후속 작업을 실행합니다.

## 설치하다

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### 번역 토큰 구성

방문하세요 [i18n.site/token](//i18n.site/token) 토큰을 복사하려면 클릭하세요.

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` 생성하고 복사한 내용을 붙여넣으면 내용은 다음과 같습니다.

```
token: YOUR_API_TOKEN
```

또한 결제 신용카드를 연결해야 합니다 [i18n.site/payBill](//i18n.site/payBill) (재충전이 필요하지 않습니다. 웹사이트는 사용량에 따라 자동으로 수수료를 공제합니다. [가격은 홈페이지를 참조하세요](/#price) .)

## 사용

### 데모 프로젝트

`i18` 번역 구성을 알아보려면 데모 프로젝트를 참조하세요 [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

중국 사용자는 복제할 수 있습니다 [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

복제 후 디렉터리에 들어가서 `i18` 실행하면 번역이 완료됩니다.

### 디렉토리 구조

템플릿 웨어하우스 디렉터리 구조는 다음과 같습니다.

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` 디렉터리에 있는 번역된 데모 파일은 예시일 뿐이므로 삭제할 수 있습니다.

### 번역 실행

디렉토리를 입력하고 `i18` 실행하여 번역하세요.

번역 외에도 프로그램은 `.i18n/data` 폴더도 생성하므로 저장소에 추가하세요.

새 파일을 번역한 후 이 디렉터리에 새 데이터 파일이 생성됩니다. `git add . ` 추가해야 합니다.

## 구성 파일

`.i18n/conf.yml` 은 `i18` 명령줄 변환 도구의 구성 파일입니다.

내용은 다음과 같습니다.

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### 소스 언어 &

구성 파일에서 `fromTo` 의 하위 항목은 다음과 같습니다.

`en` 은 소스 언어이고, `zh ja ko de fr` 번역의 대상 언어입니다.

언어 코드를 참조하세요 [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

예를 들어 중국어를 영어로 번역하려면 `zh: en` 줄을 다시 작성하세요.

지원되는 모든 언어로 번역하려면 `:` 뒤에 공백을 남겨두십시오. 예를 들어

```
i18n:
  fromTo:
    en:
```

다른 하위 디렉터리에 대해 다른 `fromTo` 구성할 수 있습니다 / 데모는 다음과 같이 작성됩니다 :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

이 구성 테이블에서 카탈로그 `blog` 번역의 소스 언어는 `zh` 이고, 카탈로그 `blog/your_file_name.md` 번역의 소스 언어는 `ja` 입니다.

### 다국어 이미지/링크

`replace:` 과 `MarkDown` 의 그림과 링크의 URL(그리고 포함된 `HTML` 의 `src` 와 `href` 속성)이 이 접두사를 사용하여 `.i18n/conf.yml` 으로 구성되면 URL의 소스 언어 코드가 번역의 언어 코드( [언어 코드 목록](/i18/LANG_CODE) ).

예를 들어 구성은 다음과 같습니다.

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` 은 사전, 키는 대체할 URL 접두사, 값은 대체 규칙입니다.

위의 규칙 `ko de uk>ru zh-TW>zh >en` 대체한다는 의미는 `ko de` 자신의 언어 코드의 그림을 사용하고, `zh-TW` 와 `zh` `zh` 의 그림을 사용하고, `uk` `ru` 의 그림을 사용하고, 다른 언어(예: `ja` )의 그림을 사용한다는 것입니다. 기본적으로 `en` 개입니다.

예를 들어 `MarkDown` 의 프랑스어( `fr` ) 소스 파일은 다음과 같습니다 :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

번역되어 생성된 영문( `en` ) 파일은 다음과 같습니다 :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

여기서 소스 언어 코드의 `/en/` 대상 언어의 `/zh/` 로 대체됩니다.

참고 : URL에서 대체된 텍스트의 언어 코드 앞뒤에는 `/` 있어야 합니다.

> [!TIP]
> `url:` 에 `- /` 설정하면 상대 경로만 매칭되고, `//` 로 시작하는 URL은 매칭되지 않습니다.
>
> 도메인 이름의 링크 중 일부는 교체하고 싶고 일부는 교체하고 싶지 않은 경우 `[x](//x.com/en/)` , `[x](https://x.com/en/)` 등의 다른 접두사를 사용하여 구분할 수 있습니다.

### 파일 무시

기본적으로 소스 언어 디렉터리에서 `.md` 과 `.yml` 로 시작하는 모든 파일이 번역됩니다.

특정 파일을 무시하고 번역하지 않으려면(예: 완료되지 않은 초안) `ignore` 필드를 사용하여 구성할 수 있습니다.

`ignore` `.gitignore` 파일과 동일한 [globset](https://docs.rs/globset/latest/globset/#syntax) 구문을 사용합니다.

예를 들어 위 구성 파일에서 `_* ` `_` 로 시작하는 파일이 변환되지 않음을 의미합니다.

## 번역 규칙

### 번역 편집자는 줄을 추가하거나 삭제해서는 안 됩니다.

번역은 편집 가능합니다. 원본 텍스트를 수정하고 다시 기계 번역하면 번역에 대한 수동 수정 사항이 덮어쓰여지지 않습니다(원문의 이 단락이 수정되지 않은 경우).

> [!WARN]
> 번역문과 원문 사이에는 일대일 대응이 있어야 합니다. 즉, 번역을 컴파일할 때 줄을 추가하거나 삭제하지 마세요. 그렇지 않으면 번역 편집 캐시에 혼란이 생길 수 있습니다.

문제가 발생하면 [FAQ를 참조하여 해결 방법을 찾아보세요.](/i18/qa#H1)

### `YAML` 번역

명령줄 도구는 소스 언어 파일 디렉터리에서 `.yml` 으로 끝나는 모든 파일을 찾아 번역합니다.

* 파일 이름 접미사는 `.yml` ( `.yaml` 아님)이어야 합니다.

이 도구는 사전 키가 아닌 `.yml` 의 사전 값만 변환합니다.

예를 들어 `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` 으로 번역됩니다

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` 의 번역은 수동으로 수정할 수도 있습니다(그러나 번역에서 키나 줄을 추가하거나 삭제하지 마십시오).

`YAML` 번역을 기반으로 다양한 프로그래밍 언어에 대한 국제 솔루션을 쉽게 구축할 수 있습니다.

## 고급 사용법

### 번역 하위 디렉터리

`.i18n/conf.yml` 이 생성되는 한(매번 데모 프로젝트 템플릿에서 시작할 필요가 없음) `i18` 정상적으로 작동합니다.

명령줄 도구는 모든 하위 디렉터리에서 `.i18n/conf.yml` 구성을 찾아 변환합니다.

[monorepo](//monorepo.tools) 아키텍처를 사용하는 프로젝트는 언어 파일을 하위 디렉터리로 분할할 수 있습니다.

![](https://p.3ti.site/1719910016.avif)

### 사용자 정의 설치 디렉터리

기본적으로 `/usr/local/bin` 으로 설치됩니다.

`/usr/local/bin` 에 쓰기 권한이 없으면 `~/.bin` 에 설치됩니다.

환경 변수 `TO` 을 설정하면 설치 디렉터리를 정의할 수 있습니다. 예를 들어 :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
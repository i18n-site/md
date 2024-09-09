# 설치 및 사용

## Windows에서는 먼저 Git Bash를 설치해야 합니다

windows 시스템에서는 먼저 [이곳을 클릭하여 `git bash`를 다운로드하고 설치하세요](https://git-scm.com/download/win)。

`git bash` 환경에서 후속 작업을 수행합니다.

## 설치하다

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### 번역 토큰 설정

방문하세요 [i18n.site/token](//i18n.site/token) 토큰을 복사하려면 클릭하세요

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` 파일을 생성하고, 복사한 내용을 그 안에 붙여넣습니다. 내용은 다음과 같습니다:

```
token: YOUR_API_TOKEN
```

또한 결제를 위해 신용카드를 연결 [i18n.site/payBill](//i18n.site/payBill) 합니다(재충전이 필요하지 않으며 웹사이트는 사용량에 따라 자동으로 수수료를 공제합니다. [가격은 홈페이지를 참조하세요](/#price) ).

## 사용

### 데모 프로젝트

`i18` 번역 구성을 알아보려면 데모 프로젝트를 참조하세요 [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

중국 사용자는 복제할 수 있습니다 [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

클론한 후 디렉토리에 들어가 `i18` 명령을 실행하면 번역이 완료됩니다.

### 디렉토리 구조

템플릿 저장소의 디렉토리 구조는 다음과 같습니다

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` 디렉토리에 있는 번역 데모 파일은 예시이며, 필요에 따라 삭제할 수 있습니다.

### 번역을 실행하세요

디렉토리로 이동한 후 `i18`를 실행하여 번역하세요.

프로그램은 번역뿐만 아니라 `.i18n/data` 폴더도 생성합니다. 이를 리포지토리에 추가해 주세요.

새 파일을 번역한 후, 이 디렉토리 아래에 새로운 데이터 파일이 생성됩니다. `git add .` 명령어를 실행하여 추가해야 합니다.

## 구성 파일

`.i18n/conf.yml`는 `i18` 명령줄 번역 도구의 구성 파일입니다

원본 언어 및 번역 언어

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### 소스 언어 & 목표 언어

구성 파일에서 `fromTo`의 하위 항목은 다음과 같습니다:

`en`은 소스 언어이고, `zh ja ko de fr`는 번역의 대상 언어입니다.

언어 코드는 [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)에서 참조하세요.

모든 지원 언어로 번역하려면 `:` 뒤에 공백을 두어야 합니다. 예를 들어:

다른 하위 디렉토리나 파일에 대해 다른 `fromTo` 설정을 할 수 있습니다. 예시는 다음과 같습니다:

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

이 구성 테이블에서 `blog` 디렉토리의 번역 소스 언어는 `zh`이고, `blog/your_file_name.md`의 번역 소스 언어는 `ja`입니다.

### 파일 무시

기본적으로 소스 언어 디렉토리에서 `.md`과 `.yml`로 시작하는 모든 파일이 번역됩니다.

특정 파일을 번역하지 않고 싶다면(예: 완성되지 않은 초안) `ignore` 필드를 사용하여 구성하세요.

`ignore`는 `.gitignore` 파일과 유사한 [globset](https://docs.rs/globset/latest/globset/#syntax) 구문을 사용합니다.

예를 들어, 위 구성 파일에서 `_*`는 `_`로 시작하는 파일을 번역하지 않음을 의미합니다.

## 번역 규칙

### 번역 편집자는 줄을 추가하거나 삭제해서는 안 됩니다

번역은 편집 가능합니다. 원본 텍스트를 수정하고 다시 기계 번역하면 번역에 대한 수동 수정 사항이 덮어쓰여지지 않습니다(원문의 이 단락이 수정되지 않은 경우).

하지만, 번역문의 행과 원문의 행은 1:1로 일치해야 합니다. 즉, 번역을 컴파일할 때 줄을 추가하거나 삭제하지 마세요. 그렇지 않으면 번역 편집 캐시에 혼란이 생길 수 있습니다.

문제가 발생하면 [FAQ에서 해결 방법을 찾아보세요](/i18/qa#H1)

### `YAML` 번역

명령줄 도구는 소스 언어 파일 디렉토리에서 `.yml`로 끝나는 모든 파일을 찾아 번역합니다.

* 파일 이름 접미사는 `.yml`(`.yaml`가 아님)이어야 합니다.

이 도구는 사전 키가 아닌 `.yml`의 사전 값만 번역합니다.

`i18n/zh/i18n.yml`로 번역됩니다

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml`로 번역됩니다

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`의 번역은 수동으로 수정할 수도 있습니다(그러나 번역에서 키나 줄을 추가하거나 삭제하지 마십시오).

`YAML` 번역을 기반으로 다양한 프로그래밍 언어의 국제화 솔루션을 쉽게 구축할 수 있습니다.

## 하위 디렉토리 번역

### 번역 하위 디렉토리

`.i18n/conf.yml`를 생성하면(매번 데모 프로젝트 템플릿에서 시작할 필요가 없음) `i18`가 정상적으로 작동합니다.

명령줄 도구는 모든 하위 디렉토리에서 `.i18n/conf.yml` 구성을 찾아 번역합니다.

[monorepo](//monorepo.tools) 아키텍처를 사용하는 프로젝트는 언어 파일을 하위 디렉토리로 분할할 수 있습니다.

![](https://p.3ti.site/1719910016.avif)

### 사용자 정의 설치 디렉토리

기본적으로 `/usr/local/bin`로 설치됩니다.

`/usr/local/bin`에 쓰기 권한이 없으면 `~/.bin`에 설치됩니다.

환경 변수 `TO`를 설정하면 설치 디렉토리를 정의할 수 있습니다. 예를 들어:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
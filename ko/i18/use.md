# 설치 및 사용

## Windows 먼저 git bash 설치

windows 시스템을 [먼저 다운로드하고 설치하려면 여기를 클릭하세요 `git bash`](https://git-scm.com/download/win)

에서 후속 작업을 실행하세요 `git bash`

## 설치하다

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### 번역 토큰 구성

방문하세요 [i18n.site/token](//i18n.site/token) 토큰을 복사하려면 클릭하세요.

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

`~/.config/i18n.site.yml` 복사한 내용을 붙여넣으면 내용은 다음과 같습니다.

```
token: YOUR_API_TOKEN
```

또한 결제를 위해 신용카드를 연결 [i18n.site/payBill](//i18n.site/payBill) 합니다(재충전이 필요하지 않으며 웹사이트에서 사용량에 따라 자동으로 수수료를 공제합니다. [가격은 홈페이지를 참조하세요](/#price) ).

## 사용

### 데모 프로젝트

`i18` 구성을 알아보려면 데모 프로젝트를 참조하세요 [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

중국 사용자는 복제할 수 있습니다 [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

복제 후 해당 디렉터리에 들어가서 `i18` 실행하면 번역이 완료됩니다.

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

`en` 디렉토리에는 번역된 데모 파일이 포함되어 있으며 이는 단지 예시일 뿐이며 삭제할 수 있습니다.

### 번역 실행

디렉토리를 입력하고 `i18` 실행하여 번역하세요.

### 저장소에 파일 추가

번역 외에도 프로그램은 다음 파일도 생성하므로 저장소에 추가하십시오.

```
.i18n/hash
.i18n/cache/.gitignore
```

그 중 `.i18n/cache/.gitignore` 의 내용은 다음과 같습니다 :

```
**/*
!**/.gitignore
```

이는 `.i18n/cache/` 디렉토리의 모든 파일을 무시한다는 의미입니다( `.i18n/cache/.gitignore` 제외).

버전 관리 소프트웨어가 `git` 이 아닌 경우 이 구성에 따라 무시하십시오.

## 구성 파일

`.i18n/conf.yml` `i18` 줄 번역 도구의 구성 파일입니다.

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

구성 파일에서 `fromTo`

`en` 는 소스 언어이고, `zh ja ko de fr` 번역 대상 언어입니다.

언어 코드를 참조하세요 [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

예를 들어 중국어를 영어로 번역하려면 이 줄을 다시 작성하세요 `zh: en`

지원되는 모든 언어로 번역하려면 `:` 뒤에 공백을 남겨두십시오. 예를 들어

```
i18n:
  fromTo:
    en:
```

### 파일 무시

기본적으로 소스 언어 디렉토리에서 `.md` `.yml` 으로 시작하는 모든 파일이 번역됩니다.

특정 파일을 무시하고 번역하지 않으려면(예: 완료되지 않은 초안) `ignore` 구성을 사용할 수 있습니다.

`ignore` `.gitignore` 과 유사한 구문을 사용합니다 [globset](https://docs.rs/globset/latest/globset/#syntax)

예를 들어 위 구성 파일에서 `_* ` 는 `_` 으로 시작하는 파일이 번역되지 않음을 의미합니다.

## 번역 규칙

### 번역 편집자는 줄을 추가하거나 삭제해서는 안 됩니다.

번역은 편집 가능합니다. 원본 텍스트를 수정하고 다시 기계 번역하면 번역에 대한 수동 수정 사항이 덮어쓰여지지 않습니다(원문의 이 단락이 수정되지 않은 경우).

단, 번역문의 행과 원문의 행은 1:1로 일치해야 합니다. 즉, 번역을 컴파일할 때 줄을 추가하거나 삭제하지 마세요. 그렇지 않으면 번역 편집 캐시에 혼란이 생길 ​​수 있습니다.

문제가 발생하면 [FAQ를 참조하여 해결 방법을 찾아보세요.](/i18/qa#H1)

### `YAML` 번역하다

명령줄 도구는 소스 언어 파일 디렉터리에서 `.yml` 로 끝나는 모든 파일을 찾아 번역합니다.

* 파일 이름 접미사는 `.yml` ( `.yaml` 아님)이어야 합니다.

이 도구는 사전 키가 아닌 `.yml` 의 사전 값만 번역합니다.

예를 들어 `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

로 번역됩니다 `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` 의 번역은 수동으로 수정할 수도 있습니다(그러나 번역에서 키나 줄을 추가하거나 삭제하지 마십시오).

`YAML` Translation을 기반으로 다양한 프로그래밍 언어에 대한 국제 솔루션을 쉽게 구축할 수 있습니다.

## 고급 사용법

### 번역 하위 디렉터리

`.i18n/conf.yml` 생성하는 한(매번 데모 프로젝트 템플릿에서 시작할 필요가 없음) `i18` 잘 작동합니다.

명령줄 도구는 모든 하위 디렉터리에서 `.i18n/conf.yml` 구성을 찾아 변환합니다.

[monorepo](//monorepo.tools) 아키텍처를 사용하는 프로젝트는 언어 파일을 하위 디렉터리로 분할할 수 있습니다.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### 사용자 정의 설치 디렉터리

기본적으로 `/usr/local/bin` 에 설치됩니다.

`/usr/local/bin` 에 쓰기 권한이 없으면 `~/.bin` 에 설치됩니다.

환경 변수 설정 `TO` 예를 들어 설치 디렉터리를 정의할 수 있습니다 :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

# 미리보기를 설치하세요 &

## 설치하다

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## 구성 토큰

`i18n.site` 에는 `i18` 번역 도구가 내장되어 있습니다. [액세스 토큰을 구성하려면 여기를 클릭하여 `i18` 문서를 참조하세요](/i18/use) .

## 데모 프로젝트

`i18n.site` 사용하는 방법을 배우기 위해 데모 프로젝트부터 시작하겠습니다.

먼저 데모 저장소를 복제하고 다음과 같이 명령을 실행합니다.

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

중국 본토 사용자는 다음을 수행할 수 있습니다.

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` 로 로컬 미리보기를 용이하게 하려면 `demo.i18n.site` 코드 베이스 복제본의 디렉터리 이름이 `md` 이어야 합니다.

### 번역하다

먼저 `md` 디렉토리에 들어가서 `i18n.site` 실행하면 `en` `zh` 으로 변환됩니다.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

실행 후 번역 및 캐시 파일이 생성됩니다. `md` `git add . ` 의 저장소에 추가하세요.

### 로컬 미리보기

`docker` 설치하고 시작합니다( `MAC` 사용자는 `docker` 의 런타임으로 [orbstack](https://orbstack.dev) 사용하는 것을 권장합니다).

그런 다음 `docker` 디렉터리를 입력하고 `./up.sh` 실행한 다음 [https://127.0.0.1](https://127.0.0.1) 방문하여 로컬로 미리 봅니다.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
# 배포 및 온라인

`i18n.site` [단일 페이지 애플리케이션](https://developer.mozilla.org/docs/Glossary/SPA) 아키텍처를 채택하고 웹사이트 입구 페이지와 웹사이트 콘텐츠가 독립적으로 배포됩니다.

위의 변환을 실행하면 `md/out/dev` 디렉터리 아래에 디렉터리 `htm` 과 `v` 가 생성됩니다.

여기서 `dev` `.i18n/htm/dev.yml` 구성 파일을 기반으로 구축되었음을 의미합니다.

`dev` 디렉토리 :

`htm` 디렉토리는 웹사이트 입구 페이지입니다.

`v` 디렉토리에는 버전 번호가 있는 웹 사이트 콘텐츠가 포함되어 있습니다.

로컬 미리보기는 버전 번호에 관심이 없으며 모든 파일을 `out/dev/v/0.1.0` 디렉터리에 복사합니다.

공식 릴리스의 경우 변경된 파일이 새 버전 번호 디렉터리에 복사됩니다.

## 구성 파일을 `-c` 으로 지정

다른 구성 파일은 `out` 디렉터리에 해당 디렉터리를 생성합니다.

예를 들어 `.i18n/htm/main.yml` `out/main` 디렉터리를 생성합니다.

`dev.yml` 과 `main.yml` 이 기본 구성입니다.

`dev` 은 `development` 의 약자로 개발 환경을 나타내며 로컬 미리보기에 사용되며 기본 구성 파일이기도 합니다.
`ol` 은 `online` 의 약자로 공식 릴리스에 사용되는 온라인 환경을 의미하며 명령줄 매개변수 `-n` ~ `npm` 을 사용하여 릴리스할 때 기본 구성 파일이기도 합니다.

다른 구성 파일을 생성할 수도 있습니다. 명령줄에서 `--htm_conf` 사용하여 사용할 구성 파일 이름을 지정합니다.

예를 들어:
```
i18n.site --htm_conf dist --save
```

여기서 `--save` 업데이트 릴리스 버전 번호를 나타냅니다.

## <a rel=id href="#npm" id="npm"></a> npmjs.com에 콘텐츠 게시

[npmjs.com](//npmjs.com) 에 콘텐츠를 게시하는 것이 권장되는 기본 솔루션입니다( [프런트엔드 고가용성](/i18n.site/feature#ha) 참조).

### npm 로그인 & 게시물

`nodejs` 설치하고 `npm login` 로 로그인하세요.

`md/.i18n/htm/main.yml` 편집하고 [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) 의 값을 `YOUR_NPM_PACKAGE` 변경합니다. `npm` 의 비어 있는 패키지 이름이 [npmjs.com](//npmjs.com) .

그런 다음 `md/.i18n/htm/main.package.json` 수정하십시오.

번역하고 출판하려면 `md` 디렉터리에서 `i18n.site --npm` 또는 `i18n.site -n` 실행하세요.

지속적 통합 환경을 사용하여 게시한다면 `nodejs` 설치할 필요가 없습니다. 로그인한 권한과 게시 권한 `~/.npmrc` 환경에 복사하면 됩니다.

`v:` in `main.yml` 패키지명을 수정하는 경우 **반드시 `.i18n/v/main` 먼저 삭제한** 후 게시하시기 바랍니다.

#### npm이 게시한 프록시 서버

중국 본토의 사용자가 네트워크 문제를 겪고 `npm` 를 게시할 수 없는 경우 환경 변수 `https_proxy` 설정하여 프록시 서버를 구성할 수 있습니다.

프록시 서버 포트가 `7890` 이라고 가정하면 다음과 같이 작성할 수 있습니다.

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## 자체 호스팅 콘텐츠

콘텐츠를 자체 호스팅하려면 먼저 `md/.i18n/htm/main.yml` 편집하고 `v: //unpkg.com/i18n.site` URL 접두사(예: `v: //i18n-v.xxx.com` 로 변경하세요.

`md` 디렉토리에 들어가서 실행하세요.

```
i18n.site --htm_conf ol --save
```

또는 약어

```
i18n.site -c ol -s
```

그런 다음 `md/out/main/v` 디렉터리의 콘텐츠를 `v:` 에 설정된 URL 접두사 경로로 구성합니다.

마지막으로 **`/.v` 으로 끝나는 경로의 캐시 시간을 `1s` 로 구성합니다** . 그렇지 않으면 새로 출시된 콘텐츠에 즉시 접근할 수 없습니다.

다른 경로의 캐시 시간을 1년 이상으로 설정하여 불필요한 요청을 줄일 수 있습니다.

## s3에 콘텐츠 호스팅

콘텐츠를 자체 호스팅하려면 자체 서버를 `CDN` 하는 것 외에 또 다른 일반적인 옵션은 `S3` +

[rclone](https://rclone.org) 사용하여 `S3` 서버에 로그인한 후 다음 스크립트를 참조 및 수정하고 각 릴리스에 대한 증분 변경 사항만 `S3` 에 복사할 수 있습니다.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`/.v` 로 끝나는 경로의 캐시 시간이 `1s` 가 되도록 `CDN` 구성해야 합니다. 그렇지 않으면 새로 출시된 콘텐츠에 즉시 액세스할 수 없습니다.

## 웹사이트 게시

웹사이트는 어디든 배포할 수 있습니다. [github page](https://pages.github.com) 및 [cloudflare page](https://pages.cloudflare.com) 은 좋은 선택입니다.

웹사이트는 [단일 페이지 애플리케이션](https://developer.mozilla.org/docs/Glossary/SPA) 아키텍처를 사용하므로 `. ` ~ `index.html` 포함하지 않는 URL 경로를 다시 작성해야 합니다.

웹사이트 시작 페이지는 한 번만 배포하면 되며, 이후 콘텐츠 업데이트를 위해 웹사이트 시작 페이지를 다시 배포할 필요가 없습니다.

### Github 페이지에 배포

먼저 [여기 github 클릭하여 조직을 만드세요](https://github.com/account/organizations/new?plan=free) . 예를 들어 다음 조직 이름은 `i18n-demo` 입니다.

그런 다음 이 조직 아래에 창고 `i18n-demo.github.io` 만듭니다( `i18n-demo` 생성한 조직 이름으로 바꾸십시오).

![](https://p.3ti.site/1721098657.avif)

이전 글의 내용을 게시할 때 `out/main/htm` 생성되었습니다. 이 디렉터리에 들어가서 : 실행하세요.

```
ln -s index.html 404.html
```


`github page` URL 경로 재작성을 지원하지 않으므로 대신 `404.html` 이 사용됩니다.

그런 다음 `htm` 디렉토리에서 다음 명령을 실행하십시오( `i18n-demo/i18n-demo.github.io.git` 자신의 창고 주소로 바꾸는 것을 기억하십시오) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

코드를 푸시한 후 액세스하기 전에 `github page` 배포가 성공적으로 실행될 때까지 기다립니다(아래 참조).

<img src="//p.3ti.site/1721116586.avif" width="350px">

데모 페이지는 다음을 참조하세요.

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Cloudflare 페이지에 배포

[cloudflare page](//pages.cloudflare.com) `github page` 에 비해 경로 재작성을 제공하고 중국 본토에 더 친숙하며 사용을 권장합니다.

`cloudflare page` 의 배포는 일반적으로 위의 `github page` 의 배포를 기반으로 합니다.

프로젝트를 생성하고 위의 `i18n-demo.github.io` 번 창고를 바인딩합니다.

프로세스는 아래 그림에 나와 있습니다.
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

조직 `i18n-demo` 에 대한 액세스 권한을 부여하려면 `Add Account` 클릭하세요.

다른 조직의 창고를 바인딩한 경우 새 조직이 표시되기 전에 `Add Account` 두 번 클릭하여 두 번 인증해야 할 수도 있습니다.

![](https://p.3ti.site/1721118306.avif)

다음으로 창고 `i18n-demo.github.io` 을 선택한 후 `Begin setup` 클릭하고 이후 단계에서는 기본값을 사용합니다.

![](https://p.3ti.site/1721118490.avif)

처음으로 바인딩한 후 액세스하려면 몇 분 정도 기다려야 합니다.

배포 후 사용자 지정 도메인 이름을 바인딩할 수 있습니다.

![](https://p.3ti.site/1721119459.avif)

사용자 정의 도메인 이름을 바인딩한 후 아래와 같이 도메인 이름으로 이동하여 단일 페이지 애플리케이션의 경로 재작성을 구성하십시오.

![](https://p.3ti.site/1721119320.avif)

위 그림의 규칙은 다음과 같습니다. 아래 첫 번째 줄의 `i18n.site` 바인딩한 도메인 이름으로 바꾸세요.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

또한 아래와 같이 캐시 규칙을 구성하고 캐시 기간을 1개월로 설정해 주세요.

![](https://p.3ti.site/1721125111.avif)

위 그림의 두 번째 단계에서 일치하는 도메인 이름을 바인딩한 도메인 이름으로 변경하세요.

### 중국 본토의 웹사이트 배포 최적화

중국 본토의 네트워크 환경에서 더 나은 접근성 성능을 얻으려면 먼저 [도메인 이름을 등록](//beian.aliyun.com) 하십시오.

그런 다음 중국 본토의 클라우드 공급업체의 개체 스토리지를 사용하십시오 + `CDN` 다음 콘텐츠를 배포하십시오 `out/main/htm`

엣지 컴퓨팅을 사용하여 단일 페이지 애플리케이션에 맞게 경로를 다시 작성할 수 있습니다. 예를 들어 [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) 다음과 같이 구성할 수 있습니다.

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // out.XXX = 'MSG';와 같이 출력을 디버그하도록 응답 헤더를 설정할 수 있습니다.
})
```

![](https://p.3ti.site/1721121273.avif)

레코드 `MX` 과 레코드 `CNAME` 공존할 수 없기 때문에 동시에 도메인 이름 이메일을 받으려면 레벨 `CNAME` 에서 레코드 `A` 으로 [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) 스크립트와 협력해야 합니다.

또한, 중국 본토에 있는 클라우드 공급업체의 해외 트래픽 요금은 상대적으로 비싸기 때문에 비용을 최적화하고 싶다면 [Huawei DNS 의 무료 지리적 해상도](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) 와 [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 의 사용자 정의 도메인 이름(아래 참조)을 사용하여 달성할 수 있습니다. 트래픽 전환──중국 본토 트래픽 라우팅 Baidu Cloud `CDN` , 국제 트래픽은 cloudflare 입니다.

![](https://p.3ti.site/1721119788.avif)

이러한 배포 최적화 솔루션은 더욱 복잡하며 향후 별도의 장에서 소개될 예정입니다.

### 일반 도메인 이름 리디렉션

`i18n.site` 사용하여 웹사이트를 기본 웹사이트로 생성하는 경우 일반적으로 팬 도메인 리디렉션을 구성해야 합니다. 즉, 액세스를 `*.xxx.com` ( `www.xxx.com` 포함)에서 `xxx.com` 으로 리디렉션합니다.

이 요구 사항은 Alibaba Cloud `CDN` `EdgeScript` ( [영어 문서](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [중국어 문서](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )을 통해 달성할 수 있습니다.

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) 에 도메인 이름을 추가하고 Alibaba Cloud `CDN` 에서 도메인 이름을 `*.xxx.com` `CNAME` 지정하세요.

![](https://p.3ti.site/1721122000.avif)

예를 들어 위 그림에서 팬 도메인 이름 리디렉션 구성이 `*.i18n.site` 인 경우는 다음과 같습니다.

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx로 배포

!의 `server` 단락에 다음과 유사한 구성을 추가하십시오 nginx `/root/i18n/md/out/main/htm` 자신의 프로젝트 `out/main/htm` 의 경로로 변경하십시오.

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` 지속적인 통합을 기반으로

다음을 참조하여 `github action` 을 구성할 수 있습니다.

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

구성에서 볼 수 있듯이 이 워크플로는 분기 `main` 과 분기 `dist` 로 푸시할 때 트리거됩니다.

워크플로는 분기 이름에 해당하는 구성 파일을 사용하여 문서를 게시합니다. 여기서는 게시 구성으로 각각 `.i18n/htm/main.yml` 과 `.i18n/htm/dist.yml` 사용됩니다.

문서 릴리스 프로세스에 대해 다음 모범 사례를 권장합니다.

변경 사항이 분기 `main` 에 푸시되면 문서가 트리거되어 미리 보기 스테이션에 구축 및 배포됩니다(미리 보기 스테이션을 사용할 수 있습니다 [github page](//pages.github.com) ).

미리보기 사이트에서 문서가 올바른지 확인한 후 코드가 병합되어 브랜치 `dist` 으로 푸시되고 공식 빌드 및 배포가 온라인으로 전환됩니다.

물론 위 프로세스를 구현하려면 더 많은 구성을 작성해야 합니다.

워크플로우 스크립팅을 위해 실제 프로젝트를 참조할 수 있습니다 [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

구성의 `secrets.I18N_SITE_TOKEN` 과 `secrets.NPM_TOKEN` 사용하려면 코드 베이스에서 비밀 변수를 구성해야 합니다.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` 접근 가능 [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` 구성에서 패키지 `npm` 의 게시 토큰입니다. [npmjs.com](//npmjs.com) 방문하여 게시 권한이 있는 토큰을 만듭니다(아래 참조).

![](//p.3ti.site/1730969906.avif)


## 디렉토리 구조

### `public`

`favicon.ico` , `robots.txt` 등과 같은 웹사이트의 정적 파일입니다.

여기의 아이콘 파일은 [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` 디렉터리 아래에는 `i18n.site` 의 구성 파일, 번역 캐시 등이 있습니다. 자세한 내용은 다음 장 ["구성"](/i18n.site/conf) 을 참조하세요.

### `en`

`.i18n/conf.yml` 구성 파일의 `fromTo` 에 해당 `en` 소스 언어 디렉터리

```yaml
i18n:
  fromTo:
    en: zh
```

번역 구성을 참고해주세요 [i18](/i18/use)
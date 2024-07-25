# 설치 &

## 구성 토큰

`i18n.site` `i18` 번역 도구가 내장되어 있습니다. [액세스 토큰을 구성하려면 여기를 클릭하여 `i18` 문서를 참조하세요](/i18/use) .

## 설치하다

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## 데모 프로젝트

데모 프로젝트부터 시작해서 사용법을 배워봅시다 `i18n.site`

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

`demo.i18n.site` `docker` 로 로컬 미리보기를 용이하게 하려면 코드 베이스 복제의 디렉토리 이름이 `md` 이어야 합니다.

### 번역하다

먼저 `md` 디렉토리에 들어가서 `i18n.site` 실행하면 `en` 가 `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

실행 후에는 번역 및 캐시 파일이 생성됩니다. `md` 디렉토리의 저장소 `git add . ` 에 추가하세요.

### 로컬 미리보기

`docker` 설치하고 시작하세요( `MAC` [orbstack](https://orbstack.dev) `docker` 의 런타임으로 사용하는 것이 좋습니다).

그런 다음 `docker` 디렉토리를 입력하고 `./up.sh` 실행한 후 [https://127.0.0.1](https://127.0.0.1) 를 방문하여 로컬로 미리 봅니다.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### 게시물 내용

`i18n.site` [단일 페이지 애플리케이션](https://developer.mozilla.org/docs/Glossary/SPA) 아키텍처를 채택하고 웹사이트 입구 페이지와 웹사이트 콘텐츠가 독립적으로 배포됩니다.

위 번역을 실행하면 `md/out/dev` 디렉토리에 `htm` 및 `v` 디렉토리가 생성됩니다.

여기서 `dev` `.i18n/htm/dev.yml` 파일을 기반으로 구축되었음을 나타냅니다.

`dev` :

`htm` 디렉토리 아래에는 웹사이트 입구 페이지가 있습니다.

`v` 디렉토리에는 버전 번호와 함께 웹사이트 콘텐츠가 포함되어 있습니다.

로컬 미리보기는 버전 번호에 관계없이 모든 파일을 `out/dev/v/0.1.0` 디렉토리에 복사합니다.

공식 릴리스의 경우 변경된 파일이 새 버전 번호 디렉터리에 복사됩니다.

#### -c를 사용하여 구성 파일을 지정합니다.

다른 구성 파일은 `out` 디렉토리 아래에 해당 디렉토리를 생성합니다.

예를 들어, `.i18n/htm/ol.yml` `out/ol` 디렉토리를 생성합니다.

`dev.yml` 및 `ol.yml` 기본 구성입니다.

`dev` 개발 환경을 나타내는 `development` 의 약어로, 로컬 미리보기에 사용되며 기본 구성 파일이기도 합니다.
`ol` 는 온라인 환경을 나타내는 `online` 의 약어로, 공식 릴리스에 사용되며, 명령줄 매개변수 `-n` 사용하여 `npm` 할 때 기본 구성 파일이기도 합니다.

다른 구성 파일을 생성할 수도 있습니다. 명령줄에서 `--htm_conf` 사용하여 구성 파일 이름을 지정할 수도 있습니다.

예를 들어:
```
i18n.site --htm_conf yourConfig --save
```

여기서 `--save` 는 업데이트 릴리스 버전 번호를 나타냅니다.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com에 콘텐츠 게시

[npmjs.com](//npmjs.com) 에 콘텐츠를 게시하는 것이 권장되는 기본 솔루션입니다( [프런트엔드 고가용성](/i18n.site/feature#ha) 참조).

##### npm login & 풀어 주다

`nodejs` 설치하고 `npm login` 사용하여 로그인하세요.

`md/.i18n/htm/ol.yml` 편집하고 `v: //unpkg.com/i18n.site` 의 `i18n.site` 원하는 대로 변경하세요 `npm` 패키지 이름.

[npmjs.com](//npmjs.com) 에서는 비어 있는 패키지 이름을 사용하세요. 웹사이트 도메인 이름을 패키지 이름으로 사용하는 것이 좋습니다.

`npm` 패키지를 기반으로 게시하는 경우 `v:` 값의 접두사로 **`//unpkg.com/` 사용해야 합니다** . 캐시 시간 `i18n.site` 이 접두사 경로 아래 `/.v` 은 새 릴리스를 적시에 볼 수 있도록 특별히 최적화되었습니다.

번역하고 게시하려면 `md` 디렉토리에서 `i18n.site --npm` 또는 `i18n.site -n` 실행하세요.

지속적 통합 환경을 사용하여 게시하는 경우에는 설치할 필요가 없습니다 `nodejs` 로그인하고 게시된 권한 `~/.npmrc` 해당 환경에 복사하기만 하면 됩니다.

`ol.yml` 의 `v:` 에서 패키지 이름을 수정하는 경우 **반드시 `.i18n/v/ol` 먼저 삭제한 후 게시하시기** 바랍니다.

##### npm이 게시한 프록시 서버

중국 본토의 사용자가 네트워크 문제를 겪고 `npm` 패키지를 게시할 수 없는 경우 환경 변수 `https_proxy` 를 설정하여 프록시 서버를 구성할 수 있습니다.

프록시 서버 포트가 `7890` 라고 가정하면 다음과 같이 작성할 수 있습니다.

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### 자체 호스팅 콘텐츠

콘텐츠를 자체 호스팅하려면 먼저 `md/.i18n/htm/ol.yml` 편집하고 `v: //unpkg.com/i18n.site` `v: //i18n-v.xxx.com` 와 같은 URL 접두사로 변경하세요.

`md` 디렉토리를 입력하고 실행하세요.

```
i18n.site --htm_conf ol --save
```

또는 약어

```
i18n.site -c ol -s
```

그런 다음 `md/out/ol/v` 디렉터리의 콘텐츠를 `v:` 에 설정된 URL 접두사 경로로 구성합니다.

마지막으로 **`/.v` 로 끝나는 경로의 캐시 시간을 `1s` 으로 구성합니다.** 그렇지 않으면 새로 출시된 콘텐츠에 즉시 액세스할 수 없습니다.

다른 경로의 캐시 시간을 1년 이상으로 설정하여 불필요한 요청을 줄일 수 있습니다.

##### s3에 콘텐츠 호스팅

콘텐츠를 자체 호스팅하려면 자체 서버를 사용하는 것 외에 또 + 일반적인 옵션 `CDN` `S3`

[rclone](https://rclone.org) Login `S3` 서버를 사용하신 후 아래 스크립트를 참고하여 수정하시고 게시할 때마다 `S3` 에 증분 변경 사항만 복사하시면 됩니다.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` 으로 끝나는 경로의 캐시 시간이 `1s` 가 되도록 `CDN` 그렇지 않으면 새로 출시된 콘텐츠에 즉시 액세스할 수 없습니다.

### 웹사이트 게시

웹사이트는 어디든 배포할 수 있습니다. [github page](https://pages.github.com) 및 [cloudflare page](https://pages.cloudflare.com) 좋은 선택입니다.

웹사이트는 [단일 페이지 애플리케이션](https://developer.mozilla.org/docs/Glossary/SPA) 의 아키텍처를 채택하므로 `. ` 를 포함하지 않는 URL 경로를 `index.html` 으로 다시 작성해야 합니다.

웹사이트 시작 페이지는 한 번만 배포하면 되며, 이후 콘텐츠 업데이트를 위해 웹사이트 시작 페이지를 다시 배포할 필요가 없습니다.

#### Github 페이지에 배포

먼저 [여기 github 클릭하여 조직을 만드십시오](https://github.com/account/organizations/new?plan=free) . 예를 들어 다음과 같은 조직 이름이 있습니다 `i18n-demo`

그런 다음 이 조직 아래에 창고를 생성하십시오 `i18n-demo.github.io` ( `i18n-demo` 생성한 조직 이름으로 바꾸십시오):

<img alt="" src="https://p.3ti.site/1721098657.avif">

이전 글의 내용을 게시할 때 생성되었습니다 `out/ol/htm` 이 디렉토리에 들어가서 실행해 주세요 :

```
ln -s index.html 404.html
```


`github page` URL 경로 재작성을 지원하지 않으므로 대신 `404.html` 이 사용됩니다.

그런 다음 `htm` 디렉토리에서 다음 명령을 실행하십시오( `i18n-demo/i18n-demo.github.io.git` 자신의 창고 주소로 바꾸십시오) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

코드를 푸시한 후 `github page` 배포가 성공적으로 실행될 때까지 기다리면(아래 표시된 대로) 해당 코드에 액세스할 수 있습니다.

<img src="//p.3ti.site/1721116586.avif" width="350px">

데모 페이지는 다음을 참조하세요.

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Cloudflare 페이지에 배포

[cloudflare page](//pages.cloudflare.com) `github page` 비해 경로 재작성을 제공하고 중국 본토에 더 친숙하며 사용하는 것이 좋습니다.

`cloudflare page` 배포는 일반적으로 위 `github page` 의 배포를 기반으로 합니다.

프로젝트를 생성하고 위의 창고를 바인딩합니다 `i18n-demo.github.io`

프로세스는 아래 그림에 나와 있습니다.
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` 조직 에 대한 액세스 권한을 부여하려면 을 클릭하세요 `Add Account`

다른 조직의 창고를 바인딩한 경우 새 조직이 표시되기 전에 `Add Account` 를 두 번 클릭하여 인증해야 할 수도 있습니다.

<img alt="" src="https://p.3ti.site/1721118306.avif">

다음으로 `i18n-demo.github.io` Warehouse를 선택한 후 `Begin setup` 클릭하고 이후 단계에서는 기본값을 사용합니다.

<img alt="" src="https://p.3ti.site/1721118490.avif">

처음으로 바인딩한 후 액세스하려면 몇 분 정도 기다려야 합니다.

배포 후 사용자 지정 도메인 이름을 바인딩할 수 있습니다.

<img alt="" src="https://p.3ti.site/1721119459.avif">

사용자 정의 도메인 이름을 바인딩한 후 아래와 같이 도메인 이름으로 이동하여 단일 페이지 애플리케이션의 경로 재작성을 구성하십시오.

<img alt="" src="https://p.3ti.site/1721119320.avif">

위 그림의 규칙은 다음과 같습니다. 아래 첫 번째 줄의 `i18n.site` 귀하에게 바인딩된 도메인 이름으로 바꾸세요.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

또한 아래와 같이 캐시 규칙을 구성하고 캐시 기간을 1개월로 설정해 주세요.

<img alt="" src="https://p.3ti.site/1721125111.avif">

위 그림의 두 번째 단계에서 일치하는 도메인 이름을 바인딩한 도메인 이름으로 변경하세요.

#### 중국 본토의 웹사이트 배포 최적화

중국 본토의 네트워크 환경에서 더 나은 접근성 성능을 얻으려면 먼저 [도메인 이름을 등록](//beian.aliyun.com) 하십시오.

그런 `out/ol/htm` 중국 본토의 클라우드 공급업체의 개체 스토리지 `CDN` 사용하세요 +

에지 컴퓨팅을 사용하여 [Baidu Smart Cloud와 같은 단일 페이지 애플리케이션에 맞게 경로를 다시 작성할 수 있습니다 `CDN`](//cloud.baidu.com/product/cdn.html) 다음과 같이 구성할 수 있습니다.

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` 레코드와 `CNAME` 레코드는 공존할 수 없기 때문에 동시에 도메인 이름 이메일을 받으려면 [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) 스크립트에 협력하여 `CNAME` `A` 레코드.

또한, 중국 본토에 있는 클라우드 공급업체의 해외 트래픽 요금은 상대적으로 비싸기 때문에 비용을 최적화하고 싶다면 [Huawei Cloud의 무료 지리적 DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) 와 [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 의 사용자 정의 도메인 이름(아래 참조)을 사용하여 달성할 수 있습니다. 트래픽 전환──중국 본토 트래픽 Baidu Cloud `CDN` 국제 트래픽은 cloudflare 입니다.

<img alt="" src="https://p.3ti.site/1721119788.avif">

이러한 배포 최적화 솔루션은 더욱 복잡하며 향후 별도의 장에서 소개될 예정입니다.

#### 일반 도메인 이름 리디렉션

`i18n.site` 사용하여 웹사이트를 기본 웹사이트로 생성하는 경우 일반적으로 팬 도메인 리디렉션, 즉 `*.xxx.com` ( `www.xxx.com` 포함) 액세스를 `xxx.com` .

이 요구 사항은 Alibaba Cloud의 `EdgeScript` ( [영어 문서](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [중국어 문서](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )을 통해 달성할 수 있습니다 `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) 에 도메인 이름을 추가하고 도메인 이름 `*.xxx.com` Alibaba Cloud `CDN` 의 `CNAME` 로 지정합니다.

<img alt="" src="https://p.3ti.site/1721122000.avif">

예를 들어 위 그림에서 `*.i18n.site` 의 팬 도메인 이름 리디렉션 구성은 다음과 같습니다.

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx로 배포

`server` 에 다음과 유사한 구성을 추가하십시오 nginx 여기서 `/root/i18n/md/out/ol/htm` 자신의 프로젝트 `out/ol/htm` 경로로 변경하십시오.

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### 디렉토리 구조

#### 공공의

`favicon.ico` `robots.txt` 등과 같은 웹사이트의 정적 파일입니다.

여기의 아이콘 파일은 [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` 디렉토리 아래에는 `i18n.site` 의 구성 파일, 번역 캐시 등이 있습니다. 자세한 내용은 다음 장 ["구성"을](/i18n.site/conf) 참조하세요.

#### ko

구성 파일의 `fromTo` `en` `.i18n/conf.yml` 해당하는 소스 언어 디렉터리

```yaml
i18n:
  fromTo:
    en: zh
```

번역 구성을 참고해주세요 [i18](/i18/use)


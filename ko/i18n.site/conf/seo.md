# 검색 엔진 최적화(SEO)

## 원리

`i18n.site`는 새로 고침되지 않는 단일 페이지 아키텍처를 채택하고 있으며, 검색 인덱스를 용이하게 생성하기 위해 별도의 정적 페이지와 `sitemap.xml`을 크롤러가 수집할 수 있도록 생성합니다.

검색 엔진의 크롤러가 접근 요청의 `User-Agent`로 인식되면, 요청은 `302` 코드를 통해 정적 페이지로 리디렉션됩니다.

정적 페이지에서는 `link` 태그를 사용하여 이 페이지의 다른 언어 버전에 대한 링크를 표시합니다. 예를 들어:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## 정적 파일을 업로드할 객체 스토리지를 구성합니다

정적 파일은 로컬에 생성할 수 있지만, 보통은 객체 스토리지에 업로드하는 것이 일반적입니다.

데모 프로젝트의 `.i18n/htm/ol.yml` 구성 파일을 예시로 들어 봅시다

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

먼저 `host:`의 값을 도메인으로 수정하세요. 예를 들어 `i18n.site`입니다.

그런 다음 `~/.config/i18n.site.yml`을 편집하여 다음과 같은 구성을 추가하세요:

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

구성에서 `i18n.site`를 `.i18n/htm/ol.yml`의 `host:` 값으로 변경하시고, `s3` 아래에는 여러 객체 스토리지를 구성할 수 있으며, `region` 필드는 선택 사항입니다(많은 객체 스토리지는 이 필드를 설정할 필요가 없습니다).

그런 다음 `i18n.site -n` 명령어를 실행하여 프로젝트를 다시 배포합니다.

`~/.config/i18n.site.yml`을 수정하고 다시 업로드하고 싶다면, 프로젝트의 루트 디렉토리에서 다음 명령어를 사용하여 업로드 캐시를 지워주세요:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## 클라우드플레어 설정

도메인을 [cloudflare](//www.cloudflare.com)에 호스팅합니다.

### 변환 규칙

다음과 같은 변환 규칙을 추가하세요

![](//p.3ti.site/1725436822.avif)

규칙 코드는 다음과 같습니다. "i18n.site"를 도메인으로 변경하세요

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### 캐싱 규칙

다음과 같은 캐싱 규칙을 추가하세요

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### 리디렉션 규칙

다음과 같은 리디렉션 규칙을 설정하세요. "i18n.site"를 도메인으로 변경하세요

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect`을 동적 리디렉션으로 설정하고, 리디렉션 경로 `concat("/en",http.request.uri.path,".htm")`의 `/en`을 검색 엔진이 인덱싱할 기본 언어로 변경하세요.

## 百度智能云 설정

중국 본토에 서비스를 제공해야 한다면 [百度智能云](//cloud.baidu.com)를 사용할 수 있습니다.

데이터를百度对象存储에 업로드하고百度内容分发网络에 바인딩합니다.

그런 다음 [EdgeJS边缘服务](//console.bce.baidu.com/cdn/#/cdn/ejs/list)에 다음과 같은 스크립트를 작성하세요

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

`Debug`를 클릭한 후 전체 네트워크에 배포를 클릭하세요.

![](//p.3ti.site/1725437754.avif)

## 고급 사용법: 지역 분석을 기반으로 트래픽 분산

중국 대륙에서 서비스를 제공하고, 동시에 무료 국제 트래픽을 `cloudflare`에서 원하시다면, 지역 해석 기능을 갖춘 `DNS`를 사용할 수 있습니다.

예를 들어, [华为云DNS](https://www.huaweicloud.com)는 무료 지역 분석을 제공하여 중국 본토 트래픽이百度智能云을 통해 국제 트래픽이 `cloudflare`를 통해 흐를 수 있도록 합니다.

`cloudflare` 설정에는 많은 함정이 있습니다. 몇 가지 주의할 점을 소개합니다:

### 도메인이 다른 `DNS`에 호스팅된 경우 `cloudflare`를 어떻게 사용할까요?

먼저 임의의 도메인을 `cloudflare`에 바인딩한 후, `SSL/TLS` → 사용자 정의 도메인을 통해 기본 도메인을 이 도메인에 연결하세요.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2`는 사용자 정의 도메인을 통해 액세스할 수 없습니다

`cloudflare`의 자체 객체 스토리지 `R2`는 사용자 정의 도메인을 통해 접근할 수 없기 때문에, 정적 파일을 저장하려면 타사 객체 스토리지를 사용해야 합니다.

여기서는 [backblaze.com](https://www.backblaze.com)을 예로 들어 타사 객체 스토리지를 `cloudflare`에 연결하는 방법을 설명합니다.

`backblaze.com`에 버킷을 생성하고 파일을 업로드한 후, 파일을 탐색하여 `f003.backblazeb2.com`와 같은 `Friendly URL` 도메인을 가져옵니다.

![](//p.3ti.site/1725440783.avif)

`cloudflare`에서 도메인을 `CNAME`으로 `f003.backblazeb2.com`로 변경하고 프록시를 활성화하세요.

![](//p.3ti.site/1725440896.avif)

`cloudflare`의 `SSL` → 암호화 모드를 `Full`로 설정하세요

![](//p.3ti.site/1725438572.avif)

다음과 같은 변환 규칙을 추가하고 가장 상단에 위치시키세요(가장 상단의 규칙은 가장 낮은 우선순위를 가집니다)

![](//p.3ti.site/1725443232.avif)

`Rewrite to`를 동적으로 설정하고 `concat("/file/your_bucketname",http.request.uri.path)`의 `your_bucketname`을 사용자의 버킷 이름으로 변경하세요.

또한 `cloudflare` 변환 규칙에서 `index.html`을 `file/your_bucketname/index.html`로 변경하고, 다른 설정은 그대로 유지하세요.

![](//p.3ti.site/1725441384.avif)
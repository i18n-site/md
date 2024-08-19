
## CNAME 바인딩된 도메인名

Cloudflare Worker의 도메인을 `SSL/TLS` 설정을 통해 사용자 정의 호스트명으로 바인딩한 후, CNAME 도메인을 직접 접근하면 오류 코드 `error code: 522`가 나타납니다

이 경우, HTTP 라우팅 → Workers 라우팅을 통해 라우트를 설정해야 합니다. 다음과 같이 설정하면 됩니다

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
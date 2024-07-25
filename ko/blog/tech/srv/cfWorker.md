
## CNAME 바인딩된 도메인 이름

Cloudflare Worker 도메인 이름이 전달되었습니다 `SSL/TLS` → 사용자 정의 호스트 이름 바인딩 CNAME 도메인 이름 뒤에 직접 액세스하면 오류가 보고됩니다 `error code: 522`

이때 아래와 같이 HTTP 라우팅 → Workers 라우팅을 사용하여 경로를 바인딩해야 합니다.

<img alt="" src="https://p.3ti.site/1719625477.avif">
<img alt="" src="https://p.3ti.site/1719625385.avif">



## CNAME 綁定域名

Cloudflare Worker 的域名通過`SSL/TLS`→ 自定義主機名 綁定 CNAME 域名之后, 直接訪問會報錯`error code: 522`

這時候需要用 HTTP 路由 → Workers 路由 來綁定一個路由, 如下圖

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)


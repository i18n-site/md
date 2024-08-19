
## CNAME 绑定域名

Cloudflare Worker 的域名通过`SSL/TLS`→ 自定义主机名 绑定 CNAME 域名之后, 直接访问会报错`error code: 522`

这时候需要用 HTTP 路由 → Workers 路由 来绑定一个路由, 如下图

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
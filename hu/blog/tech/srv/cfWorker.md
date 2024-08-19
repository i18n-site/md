
## CNAME kötött domain név

A Cloudflare Worker domainje `SSL/TLS` segítségével → egyedi hosztnevéhez kötött CNAME domain név összerendelése után közvetlen hozzáférés esetén `error code: 522` hibaüzenet jelenik meg

Ekkor HTTP útválasztás → Workers útválasztás használatára van szükség egy útvonal kötéséhez, mint az alábbi ábrán látható

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)

## CNAME-bundet domännamn

Cloudflare Workers domännamn som är bundet via `SSL/TLS` → anpassat värdnamn, efter att CNAME-domänen är bunden, kommer direktåtkomst att resultera i ett fel `error code: 522`

Då behöver man använda HTTP-ruttning → Workers-ruttning för att binda en rutt, som visas i figuren nedan

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
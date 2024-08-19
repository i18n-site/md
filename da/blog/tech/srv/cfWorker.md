
## CNAME-bundet domænenavn

Efter at Cloudflare Workers' domænenavn er blevet bundet via `SSL/TLS` → tilpasset værtsnavn, vil direkte adgang resultere i en fejl `error code: 522`

I denne situation skal du bruge HTTP-ruting → Workers-ruting til at binde en rute, som vist i.figuren nedenfor

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
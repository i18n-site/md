
## CNAME-bundet domenenavn

Etter at Cloudflare Worker-domenenavnet er bundet via `SSL/TLS` → tilpasset vertsnavn, ved binding av CNAME-domenenavnet, vil direkte tilgang føre til feilmelding `error code: 522`

I denne situasjonen må man bruke HTTP-ruting → Worker-ruting for å binde en rute, som vist i figuren nedenfor

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
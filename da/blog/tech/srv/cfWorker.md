
## CNAME-Bundet Domænenavn

Cloudflare Worker Domænenavnet passerer `SSL/TLS` Brugerdefineret værtsnavn er bundet til CNAME domænenavnet, og der vil blive rapporteret en fejl ved direkte adgang `error code: 522`

På nuværende tidspunkt skal du bruge HTTP-routing → Workers-routing for at binde en rute, som vist nedenfor

<img alt="" src="https://p.3ti.site/1719625477.avif">
<img alt="" src="https://p.3ti.site/1719625385.avif">



## Název domény vázaný pomocí CNAME

Doména pro Cloudflare Worker je vázána pomocí `SSL/TLS` → vlastní název hostitele po svázání CNAME domény, přímý přístup vyvolá chybu `error code: 522`

V takovém případě je třeba použít HTTP směrování → směrování pro Workers k vázání trasy, jak je znázorněno na následujícím obrázku

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
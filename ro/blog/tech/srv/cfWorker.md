
## Nume de domeniu legat prin CNAME

După ce domeniul pentru Cloudflare Worker este legat prin `SSL/TLS` → Setare nume de gazdă personalizat,绑定 CNAME-ul domeniului, accesul direct va genera eroarea `error code: 522`

În această situație, este necesar să se utilizeze rutarea HTTP → Rutarea pentru Workers pentru a lega o rută, cum se vede în imaginea de mai jos

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
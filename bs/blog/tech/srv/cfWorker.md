
## Ime Domene Vezano Za CNAME

Cloudflare Worker s naziv domene je vezan kroz `SSL/TLS` → prilagođeno ime hosta CNAME što je ime domene vezano, direktan pristup će prijaviti grešku `error code: 522`

U ovom trenutku, morate koristiti HTTP rutiranje → Workers rutiranje da povežete rutu, kao što je prikazano ispod

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
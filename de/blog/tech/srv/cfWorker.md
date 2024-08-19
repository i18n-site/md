
## CNAME-gesteuerter Domänenname

Nachdem der Domänenname des Cloudflare Workers über `SSL/TLS` → benutzerdefinierten Hostnamen mit einem CNAME-Domänennamen gebunden wurde, führt ein direkter Zugriff zu einem Fehler `error code: 522`

In diesem Fall muss eine Route über das HTTP-Routing → Workers-Routing gebunden werden, wie in der folgenden Abbildung dargestellt

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)

## Bind del CNAME al dominio

Dopo aver vincolato il dominio del Cloudflare Worker tramite `SSL/TLS` → personalizzazione del nome host, il dominio CNAME associato causerà un errore di accesso diretto con `error code: 522`

In questo caso, è necessario configurare un percorso utilizzando il routing HTTP → Workers Routing, come illustrato nella figura sottostante

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
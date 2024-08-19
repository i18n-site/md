
## CNAME-g gebonden domeinnaam

Na het binden van de domeinnaam van Cloudflare Worker via `SSL/TLS` → aangepaste hostnaam, zal directe toegang tot de CNAME-domeinnaam leiden tot een foutmelding `error code: 522`

In dit geval moet u een route binden via HTTP-routering → Workers-routering, zoals in de onderstaande afbeelding weergegeven

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
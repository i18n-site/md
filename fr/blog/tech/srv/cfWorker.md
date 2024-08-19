
## Nom de domaine lié via CNAME

Après avoir lié le domaine du Cloudflare Worker via `SSL/TLS` → hôte personnalisé, en liant le domaine CNAME, une erreur apparaîtra lors de l'accès direct : `error code: 522`

À ce moment-là, il est nécessaire d'utiliser le routage HTTP → Routage Workers pour lier une route, comme illustré ci-dessous

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)

## Nazwa Domeny CNAME

Po przypisaniu domeny do Cloudflare Worker za pomocą `SSL/TLS` → niestandardowa nazwa hosta, po przypisaniu CNAME domeny, bezpośredni dostęp spowoduje błąd `error code: 522`

W takim przypadku należy użyć routes HTTP → Workers, aby przypisać trasę, jak pokazano na rysunku poniżej

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
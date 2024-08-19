
## CNAME Binding Domain Name

After the domain name of Cloudflare Worker is bound through `SSL/TLS` → Custom Host Name to bind the CNAME domain name, direct access will report an error `error code: 522`

At this time, it is necessary to use HTTP routing → Workers routing to bind a route, as shown in the figure below

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
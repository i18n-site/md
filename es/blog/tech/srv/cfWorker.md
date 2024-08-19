
## Nombre de dominio vinculado a CNAME

Después de绑定的Cloudflare Worker域名通过`SSL/TLS` → personalización de nombre de host para vincular el nombre de dominio CNAME, si se accede directamente, aparecerá el error `error code: 522`

En este caso, es necesario utilizar el enrutamiento HTTP → enrutamiento de Workers para vincular una ruta, como se muestra en la imagen a continuación

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
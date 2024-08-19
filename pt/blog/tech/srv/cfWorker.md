
## Nome de Domínio Vinculado via CNAME

Após vincular o domínio do Cloudflare Worker via `SSL/TLS` → Personalizar Nome do Host, vinculando o domínio CNAME, o acesso direto resultará em um erro `error code: 522`

Neste caso, é necessário utilizar o Roteamento HTTP → Roteamento de Workers para vincular uma rota, como ilustrado na figura abaixo

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)
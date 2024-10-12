# Otimização de Mecanismos de Pesquisa (SEO)

## Princípios

`i18n.site` adota uma arquitetura de página única sem recarregamento, para facilitar a indexação por motores de busca, gera páginas estáticas individuais e um `sitemap.xml` para que os rastreadores possam capturá-los.

Quando o `User-Agent` da solicitação de acesso for identificado como um rastreador de motor de busca, a solicitação será redirecionada para a página estática via `302`.

Nas páginas estáticas, utilize `link` para especificar os links para versões desta página em diferentes idiomas, por exemplo:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configure o armazenamento de objetos para upload de arquivos estáticos

Arquivos estáticos podem ser gerados localmente, mas é mais comum carregá-los para o armazenamento de objetos.

Como exemplo, considere o arquivo de configuração `.i18n/htm/ol.yml` do projeto de demonstração

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Primeiro, modifique o valor de `host:` para o seu domínio, por exemplo, `i18n.site`.

Em seguida, edite `~/.config/i18n.site.yml` e adicione a seguinte configuração:

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Na configuração, substitua `i18n.site` pelo valor de `host:` em `.i18n/htm/ol.yml`; em `s3`, você pode configurar múltiplos armazenamentos de objetos, e o campo `region` é opcional (muitos armazenamentos de objetos não requerem este campo).

Então, execute `i18n.site -n` para republicar o projeto.

Se você modificou `~/.config/i18n.site.yml` e deseja recarregar, use o seguinte comando no diretório raiz do projeto para limpar o cache de upload:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Configuração do Cloudflare

O nome de domínio é hospedado em [cloudflare](//www.cloudflare.com).

### Regras de Conversão

Adicione as regras de conversão conforme a figura abaixo:

![](//p.3ti.site/1725436822.avif)

O código da regra é o seguinte; modifique "i18n.site" para o seu domínio:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regras de Cache

Adicione as regras de cache da seguinte forma:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regras de Redirecionamento

Defina as regras de redirecionamento da seguinte forma; modifique "i18n.site" para o seu domínio:

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

Selecione `URL redirect` dinâmico e modifique `/en` no caminho de redirecionamento `concat("/en", http.request.uri.path, ".htm")` para o idioma padrão que você deseja que os motores de busca indexem.

## Configuração do Baidu Cloud Intelligence

Se você precisar oferecer serviços para a China continental, pode usar [Baidu Cloud Intelligence](//cloud.baidu.com).

Os dados são carregados para o Baidu Object Storage e vinculados à Baidu Content Delivery Network.

Em seguida, crie um script no [Serviço EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) da seguinte maneira:

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
}

r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})

})
```

Clique em `Debug` e, em seguida, em Publicar na rede inteira.

![](//p.3ti.site/1725437754.avif)

## Usos Avançados: Distribuição de Tráfego com Base na Resolução Regional

Se você deseja oferecer serviços tanto na China continental quanto aproveitar o tráfego internacional gratuito do `cloudflare`, pode usar um `DNS` com resolução regional.

Por exemplo, o [Huawei Cloud DNS](https://www.huaweicloud.com) oferece resolução regional gratuita, permitindo que o tráfego da China continental seja direcionado para o Baidu Cloud Intelligence e o tráfego internacional para o `cloudflare`.

Existem várias armadilhas na configuração do `cloudflare`; aqui estão alguns pontos de atenção:

### Como usar `cloudflare` quando o nome de domínio está hospedado em outro `DNS`:

Primeiro, vincule um domínio任意 a `cloudflare`, e então, usando `SSL/TLS` → Domínio Personalizado, associe o domínio principal a este domínio.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` não pode ser acessado por meio de um domínio personalizado

Devido ao fato de que o armazenamento de objetos `cloudflare` `R2` não permite o acesso por meio de um domínio personalizado, é necessário usar um armazenamento de objetos de terceiros para alojar os arquivos estáticos.

Aqui está um exemplo usando [backblaze.com](https://www.backblaze.com) para demonstrar como vincular um armazenamento de objetos de terceiros ao `cloudflare`.

Crie um bucket em `backblaze.com`, carregue qualquer arquivo, clique para navegar pelo arquivo e obtenha o domínio `Friendly URL`, que é `f003.backblazeb2.com` neste exemplo.

![](//p.3ti.site/1725440783.avif)

Redirecione o domínio `CNAME` para `f003.backblazeb2.com` no `cloudflare` e ative o proxy.

![](//p.3ti.site/1725440896.avif)

Altere o modo de criptografia do `SSL` no `cloudflare`, definindo-o como `Completo`

![](//p.3ti.site/1725438572.avif)

Adicione a regra de conversão conforme a figura abaixo, posicionando-a em primeiro lugar (a primeira tem a prioridade mais baixa):

![](//p.3ti.site/1725443232.avif)

Selecione `Rewrite to` dinâmico e modifique `your_bucketname` em `concat("/file/your_bucketname", http.request.uri.path)` para o nome do seu bucket.

Além disso, na regra de conversão `cloudflare` acima, `index.html` é alterado para `file/your_bucketname/index.html`, mantendo as outras configurações inalteradas.

![](//p.3ti.site/1725441384.avif)
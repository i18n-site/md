# Otimização De Mecanismos De Pesquisa (Seo)

## Princípio

`i18n.site` adota uma arquitetura de página única sem atualização. Para facilitar a indexação de pesquisa, uma página estática separada e `sitemap.xml` serão geradas para rastreamento dos rastreadores.

Quando `User-Agent` da solicitação de acesso for utilizado pelo rastreador do mecanismo de busca, a solicitação será redirecionada para a página estática via `302` .

Em páginas estáticas, use `link` para indicar links para versões desta página em diferentes idiomas, como :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Configuração Local Do nginx

Pegue o arquivo de configuração `.i18n/htm/main.yml` no projeto de demonstração como exemplo

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Primeiro modifique o valor `host:` acima para o seu nome de domínio, como `xxx.com` .

Então, `i18n.site -n` , a página estática será gerada no diretório `out/main/htm` .

Claro, você também pode habilitar outros arquivos de configuração, como primeiro consultar a configuração de `main` para criar `.i18n/htm/dist.package.json` e `.i18n/htm/dist.yml` .

Em seguida, execute `i18n.site -n -c dist` para que a página estática seja gerada em `out/dist/htm` .

`nginx` pode ser definido consultando a configuração abaixo.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Não armazene em cache os scripts de trabalho do servidor por muito tempo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Defina tempos de cache mais longos para outros recursos estáticos
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Defina qual arquivo estático o rastreador usa como entrada da página inicial
location = / {
  # Se $botLang não estiver vazio, significa acesso e redirecionamento do rastreador de acordo com o caminho do idioma definido.
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Configuração de aplicativo de página única
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configurar O Armazenamento De Objetos Para Fazer Upload De Arquivos Estáticos

Arquivos estáticos podem ser gerados localmente, mas uma abordagem mais comum é carregá-los no armazenamento de objetos.

Modifique `out` configurado acima para :

```
out:
  - s3
```

Em seguida, edite `~/.config/i18n.site.yml` e adicione a seguinte configuração :

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

Na configuração, altere `i18n.site` para o valor de `host:` em `.i18n/htm/main.yml` , vários armazenamentos de objetos podem ser configurados em `s3` e o campo `region` é opcional (muitos armazenamentos de objetos não precisam definir este campo).

Em seguida, execute `i18n.site -n` para republicar o projeto.

Se você modificou `~/.config/i18n.site.yml` e deseja fazer upload novamente, use o seguinte comando no diretório raiz do projeto para limpar o cache de upload :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configuração Do cloudflare

Nome de domínio hospedado em [cloudflare](//www.cloudflare.com)

### Regras De Conversão

Adicione as regras de conversão conforme mostrado abaixo:

![](//p.3ti.site/1725436822.avif)

O código da regra é o seguinte, modifique o código "i18n.site" para o seu nome de domínio:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regras De Cache

Adicione regras de cache da seguinte forma:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regras De Redirecionamento

Defina as regras de redirecionamento da seguinte forma, modifique o código "i18n.site" para o seu nome de domínio

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

`URL redirect` Selecione o redirecionamento dinâmico, modifique `/en` no caminho de redirecionamento `concat("/en",http.request.uri.path,".htm")` para o idioma padrão que você deseja que os mecanismos de pesquisa incluam.

## Configuração De Nuvem Inteligente Baidu

Se precisar fornecer serviços para a China continental, você pode usar [o Baidu Smart Cloud](//cloud.baidu.com) .

Os dados são carregados no Baidu Object Storage e vinculados à Rede de distribuição de conteúdo do Baidu.

Em seguida, crie o script no [serviço de EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) da seguinte maneira.

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Os cabeçalhos de resposta podem ser configurados para saída de depuração, como out.XXX = 'MSG';
})
```

Clique em `Debug` e em Publicar em toda a rede.

![](//p.3ti.site/1725437754.avif)

## Uso Avançado: Distribua O Tráfego Com Base Na Resolução Regional

Se você deseja prestar serviços na China continental e também deseja `cloudflare` tráfego internacional gratuito, pode usar `DNS` com resolução regional.

Por exemplo, [o Huawei DNS](https://www.huaweicloud.com) fornece análise regional gratuita, com a qual o tráfego da China continental pode passar pelo Baidu Smart Cloud e o tráfego internacional pode passar pelo `cloudflare` .

Existem muitas armadilhas na configuração de `cloudflare` Aqui estão alguns pontos a serem observados :

### O Nome De Domínio Está Hospedado Em Outro `DNS` , Como Usar `cloudflare`

Primeiro vincule um nome de domínio arbitrário a `cloudflare` e, em seguida, use `SSL/TLS` → nome de domínio personalizado para associar o nome de domínio principal a este nome de domínio.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Não Pode Ser Acessado Através De Um Nome De Domínio Personalizado

Como o armazenamento de objetos `cloudflare` `R2` não pode ser acessado por um nome de domínio personalizado, um armazenamento de objetos de terceiros precisa ser usado para colocar arquivos estáticos.

Aqui tomamos [backblaze.com](https://www.backblaze.com) como exemplo para demonstrar como vincular objetos de terceiros e armazená-los em `cloudflare` .

Crie um bucket em `backblaze.com` , carregue qualquer arquivo, clique para navegar no arquivo e obtenha o nome de domínio `Friendly URL` , que é `f003.backblazeb2.com` aqui.

![](//p.3ti.site/1725440783.avif)

Altere o nome de domínio de `CNAME` para `f003.backblazeb2.com` em `cloudflare` e habilite o proxy.

![](//p.3ti.site/1725440896.avif)

Modifique `cloudflare` de `SSL` → modo de criptografia, definido como `Full`

![](//p.3ti.site/1725438572.avif)

Adicione a regra de conversão conforme mostrado abaixo, coloque-a primeiro (a primeira tem a prioridade mais baixa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` selecione dinâmico e modifique `your_bucketname` em `concat("/file/your_bucketname",http.request.uri.path)` para o nome do seu bucket.

Além disso, na regra de conversão `cloudflare` acima, `index.html` é alterado para `file/your_bucketname/index.html` e as demais configurações permanecem as mesmas.

![](//p.3ti.site/1725441384.avif)